import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import { SignJWT } from 'jose/jwt/sign';
import { importJWK } from 'jose/key/import';
import { jwtVerify } from 'jose/jwt/verify';

import { db } from "./database";

/*
	Verify Nonce Signature
*/

function GetRandomNonce()
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
	const session = await new SignJWT({session: true})
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setIssuer('vorsin.tools')
		.setAudience(publicAddress)
		.setExpirationTime(sessionTime)
		.sign(jwkSecret);

	const refresh = await new SignJWT({refresh: true})
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setIssuer('vorsin.tools')
		.setAudience(publicAddress)
		.setExpirationTime(refreshTime)
		.sign(jwkSecret);

	await db.query("REPLACE INTO `active_sessions` (`publicAddress`, `activeToken`) VALUES (?, ?);", [refresh, publicAddress]);

	return {sessionJWT: session, refreshJWT: refresh};
}

export async function RefreshSession(publicAddress)
{
	let results = await db.query("SELECT `activeToken` FROM `active_sessions` WHERE `publicAddress` = ?;", publicAddress);
	let activeToken = results[0].activeToken;

	
}

export async function DestroySession(publicAddress)
{

}

export async function VerifySession(sessionToken, maxAge)
{
	try {
		var { payload, protectedHeader } = await jwtVerify(sessionToken, jwkSecret, {
			issuer: 'vorsin.tools',
			maxTokenAge: maxAge,
		})
	} catch (error) {
		return {valid: false, err: error}
	}

	return {valid: true}
}