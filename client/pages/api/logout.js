import { db } from "../../lib/database";
import { VerifySession, RetrieveNonce, GetRandomNonce } from "../../lib/verify_session";

const SUCCESS_LOGOUT = 1;
const ERR_NOT_LOGGED_IN = 2;
const ERR_SESSION_VERIF_FAILED = 3;
const ERR_REFRESH_INVALID = 4;
const ERR_NONCE_INVALID = 5;

export default async function logout(req, res) 
{
	const {cookies} = req;

	if (!cookies.sessionJWT || cookies.sessionJWT.length == 0) {
		res.status(401).send(ERR_NOT_LOGGED_IN);
		return;
	}

	const {valid, err, payload} = await VerifySession(cookies.refreshJWT, 86400);

	if (valid === false) {
		res.status(401).send(ERR_SESSION_VERIF_FAILED);

		return;
	}

	if (payload.refresh !== true) {
		res.status(401).send(ERR_REFRESH_INVALID);

		return;
	}

	const publicAddress = payload.aud.toLowerCase();
	const nonce = await RetrieveNonce(publicAddress);
	if (nonce != payload.nonce) {
		res.status(401).send(ERR_NONCE_INVALID);

		return;
	}

	await db.query("UPDATE `users` SET `nonce` = ? WHERE `publicAddress` = ?;", [GetRandomNonce(), publicAddress]);
	
	res.setHeader('Set-Cookie', ['sessionJWT=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT', 'refreshJWT=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT']);
	res.status(200).send(SUCCESS_LOGOUT);
}