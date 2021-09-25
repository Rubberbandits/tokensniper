import ReactDOMServer from "react-dom/server";
import DefaultErrorPage from 'next/error';
import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import { SignJWT } from 'jose/jwt/sign';

function VerifySignature(publicAddress, signedMessage)
{
	let _promise = new Promise((resolve, reject) => {
		const msg = `I am signing my one-time nonce: 1234`;

		const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
		const address = recoverPersonalSignature({
			data: msgBufferHex,
			sig: signedMessage,
		});

		if (address.toLowerCase() === publicAddress.toLowerCase()) {
			resolve(true); // resolve with jwt
		} else {
			reject('Signature verification failed');
		}
	});

	return _promise;
}

export default function authenticate(req, res) {
	return new Promise((resolve, reject) => {
		const {query: {publicAddress}, method} = req

		switch(method) {
			case 'GET': {
				// db lookup for nonce for address
				if (publicAddress) 
				{
					res.status(200).json({nonce: 1234});
				} else {
					res.status(404).send(ReactDOMServer.renderToString(<DefaultErrorPage statusCode={404}/>));
				}

				break;
			}
			case 'POST': {
				VerifySignature(req.body.address, req.body.signature)
					.then(token => {
						res.status(200).json({logged_in: true, token: token});

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
