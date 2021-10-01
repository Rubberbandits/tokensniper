import ReactDOMServer from "react-dom/server";
import DefaultErrorPage from 'next/error';

import { VerifySignature, RetrieveNonce, CreateSession } from "../../lib/verify_session";

export default async function authenticate(req, res) 
{
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
						let { sessionJWT, refreshJWT } = await CreateSession(publicAddress, "10m", "24h")

						res.status(200).json({logged_in: true, session: sessionJWT, refresh: refreshJWT});

						resolve();
					})
					.catch(err => {
						res.status(401).json({error: err});
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
