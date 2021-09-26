import ReactDOMServer from "react-dom/server";
import DefaultErrorPage from 'next/error';

import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import { SignJWT } from 'jose/jwt/sign';
import { importJWK } from 'jose/key/import';

var jwkSecret = null;

import { db } from "../../lib/database";

function GetRandomNonce()
{
	let randomNumber = Math.ceil(Math.random() * 9999);
	return randomNumber < 1000 ? randomNumber + 1000 : randomNumber;
}

async function RetrieveNonce(publicAddress)
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

function VerifySignature(publicAddress, signedMessage)
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

export default async function authenticate(req, res) {
	if (!jwkSecret) {
		jwkSecret = await importJWK({
				kty: 'oct',
				k: process.env.JWT_SECRET
		  	}, 'HS256');
	}

	return new Promise(async (resolve, reject) => {
		const {query: {publicAddress}, method} = req

		switch(method) {
			case 'GET': {
				// db lookup for nonce for address
				if (publicAddress) 
				{
					let result = await RetrieveNonce(publicAddress);
					res.status(200).json({nonce: result});
				} else {
					res.status(404).send(ReactDOMServer.renderToString(<DefaultErrorPage statusCode={404}/>));
				}

				break;
			}
			case 'POST': {
				let publicAddress = req.body.address;
				let signedMessage = req.body.signature;

				VerifySignature(publicAddress, signedMessage)
					.then(async () => {
						const jwt = await new SignJWT({ 'vorsin.tools:claim': true })
							.setProtectedHeader({ alg: 'HS256' })
							.setIssuedAt()
							.setIssuer('vorsin.tools')
							.setAudience(publicAddress)
							.setExpirationTime('2h')
							.sign(jwkSecret);

						res.status(200).json({logged_in: true, token: jwt});

						resolve();
					})
					.catch(err => {
						res.status(401).json({error: err});
						console.log(err);

						return resolve();
					});

				break;
			}
			default: {
				res.status(404).send(ReactDOMServer.renderToString(<DefaultErrorPage statusCode={404}/>));
			}
		}
	});
}
