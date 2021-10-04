import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import { SignJWT } from 'jose/jwt/sign';
import { importJWK } from 'jose/key/import';
import { jwtVerify } from 'jose/jwt/verify';
import { decode } from 'jose/util/base64url';

import { db } from "./database";

/*
	Verify Nonce Signature
*/

export function GetRandomNonce()
{
	let randomNumber = Math.ceil(Math.random() * 9999);
	return randomNumber < 1000 ? randomNumber + 1000 : randomNumber;
}

export async function RetrieveNonce(publicAddress)
{
	let result = await db.query("SELECT `nonce` FROM `users` WHERE `publicAddress` = ?;", publicAddress);
	if (!result[0]) return false;

	let nonce = result[0].nonce;
	if (nonce) {
		return nonce;
	} else {
		return false;
	}
}

export function VerifySignature(publicAddress, signedMessage)
{
	let _promise = new Promise(async (resolve, reject) => {
		let lowered = publicAddress.toLowerCase()
		let nonce = await RetrieveNonce(lowered);
		const msg = `I am signing my one-time nonce: ${nonce}`;

		const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
		const address = recoverPersonalSignature({
			data: msgBufferHex,
			sig: signedMessage,
		});

		if (address.toLowerCase() === lowered) {
			await db.query("UPDATE `users` SET `nonce` = ? WHERE `publicAddress` = ?;", [GetRandomNonce(), lowered]);
			resolve();
		} else {
			reject('Signature verification failed');
		}
	});

	return _promise;
}

/*
	Session Management
*/

var jwkSecret = null;
(async () => {
	jwkSecret = await importJWK({
		kty: 'oct',
		k: process.env.JWT_SECRET
	}, 'HS256');
})();

export async function CreateSession(publicAddress, sessionTime, refreshTime)
{
	const session = await new SignJWT({ session: true })
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setIssuer('vorsin.tools')
		.setAudience(publicAddress)
		.setExpirationTime(sessionTime)
		.sign(jwkSecret);

	const nonce = await RetrieveNonce(publicAddress);

	const refresh = await new SignJWT({ refresh: true, nonce: nonce })
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setIssuer('vorsin.tools')
		.setAudience(publicAddress)
		.setExpirationTime(refreshTime)
		.sign(jwkSecret);

	return {sessionJWT: session, refreshJWT: refresh};
}

export async function RefreshSession(publicAddress, sessionTime, refreshTime, originalIssueTime)
{
	const session = await new SignJWT({ session: true })
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setIssuer('vorsin.tools')
		.setAudience(publicAddress)
		.setExpirationTime(sessionTime)
		.sign(jwkSecret);

	const nonce = GetRandomNonce();
	await db.query("UPDATE `users` SET `nonce` = ? WHERE `publicAddress` = ?;", [nonce, publicAddress.toLowerCase()]);

	const refresh = await new SignJWT({ refresh: true, nonce: nonce })
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt(originalIssueTime)
		.setIssuer('vorsin.tools')
		.setAudience(publicAddress)
		.setExpirationTime(refreshTime)
		.sign(jwkSecret);

	return {sessionJWT: session, refreshJWT: refresh};
}

export async function DestroySession(publicAddress)
{
	await db.query("UPDATE `users` SET `nonce` = ? WHERE `publicAddress` = ?;", [GetRandomNonce(), publicAddress.toLowerCase()]);
}

export async function VerifySession(sessionToken, maxAge)
{
	var encoded = sessionToken.split('.');
	var payload = JSON.parse(decode(encoded[1]).toString());

	try {
		await jwtVerify(sessionToken, jwkSecret, {
			issuer: 'vorsin.tools',
			maxTokenAge: maxAge,
		})
	} catch (error) {
		return {valid: false, err: error, payload: payload}
	}

	return {valid: true, err: false, payload: payload}
}

/*
	Generic getServerSideProps for all dashboard pages
*/

export async function genericGetServerSideProps(context) 
{
	const {res, req} = context;

	const {valid, err_code} = await ValidateSession(req, res);
	return {
		props: {
			logged_in: valid === true,
			err_code: err_code || 0,
		}
	}
}

/*
	Access Control
*/

const ERR_ACCESS_TOKEN_INVALID = 1;
const ERR_ACCESS_SESSION_TOKEN = 2;
const ERR_ACCESS_TOKEN_EXPIRED = 3;
const ERR_ACCESS_NONCE_INVALID = 4;

// we get passed the request and response objects directly, just as if we were in the request function
export async function ValidateSession(req, res)
{
	const {cookies} = req;

	if (!cookies.sessionJWT || cookies.sessionJWT.length == 0) 
		return {valid: false, err_code: ERR_ACCESS_TOKEN_INVALID}

	const {valid, err, payload} = await VerifySession(cookies.sessionJWT, 600);

	if (payload.session != true)
		return {valid: false, err_code: ERR_ACCESS_SESSION_TOKEN}

	if (valid === false) {
		if (err.code === 'ERR_JWT_EXPIRED') {
			const {valid, err, payload} = await VerifySession(cookies.refreshJWT, 86400);
			const publicAddress = payload.aud;

			if (valid && payload.refresh) {
				const nonce = await RetrieveNonce(publicAddress.toLowerCase());
				if (nonce != payload.nonce) {
					return {valid: false, err_code: ERR_ACCESS_NONCE_INVALID}
				}

				const { sessionJWT, refreshJWT } = await RefreshSession(publicAddress, "10m", "24h", payload.iat);

				res.setHeader('Set-Cookie', [`sessionJWT=${sessionJWT}; Path=/`, `refreshJWT=${refreshJWT}; Path=/`]);

				return {valid: true}
			}
		}

		return {valid: false, err_code: ERR_ACCESS_TOKEN_INVALID}
	}

	return {valid: true}
}