import Head from "next/head";

import DashboardLayout from "../../layouts/dashboard";

import Login from "../../components/login";
import NavBar from "../../components/navbar";
import { VerifySession, RefreshSession, RetrieveNonce } from "../../lib/verify_session";

function LoadingScreen() {
	return (
		<div className="flex justify-center align-middle h-screen bg-gray-700">
			<Head>
				<title>Vorsin Tools - Loading</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex justify-center align-middle">
				<button class="btn btn-lg btn-ghost loading flex align-middle">loading</button>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const {res, req} = context;
	const {cookies} = req;

	if (!cookies.sessionJWT) 
		return {
			props: {
				logged_in: false
			}
		}

	const {valid, err, payload} = await VerifySession(cookies.sessionJWT, 600);

	if (payload.session != true)
		return {
			props: {
				logged_in: false
			}
		}

	if (valid === false) {
		if (err.code === 'ERR_JWT_EXPIRED') {
			const {valid, err, payload} = await VerifySession(cookies.refreshJWT, 86400);
			const publicAddress = payload.aud;

			if (valid && payload.refresh) {
				const nonce = await RetrieveNonce(publicAddress.toLowerCase());
				if (nonce != payload.nonce) {
					return {
						props: {
							logged_in: false
						}
					}
				}

				const { sessionJWT, refreshJWT } = await RefreshSession(publicAddress, "10m", "24h", payload.iat);

				res.setHeader('Set-Cookie', ['sessionJWT=' + sessionJWT, 'refreshJWT=' + refreshJWT]);

				return {
					props: {
						logged_in: true
					}
				}
			}
		}

		return {
			props: {
				logged_in: false
			}
		}
	}

	return {
		props: {
			logged_in: true
		}
	}
}

export default function Dashboard({logged_in}) {
	if (logged_in === false) 
		return <Login />

	if (logged_in === true) 
		return (
			<> 
				<Head>
					<title>Vorsin Tools - Dashboard</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
		
				<div class="w-screen">
					<NavBar />
				</div>
			</>
		)

	return <LoadingScreen />
}

Dashboard.Layout = DashboardLayout;