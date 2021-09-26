import Head from "next/head";

import DashboardLayout from "../../layouts/dashboard";

import Login from "../../components/login";
import NavBar from "../../components/navbar";
import { VerifySession } from "../../lib/verify_session";

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

	const {valid, err} = await VerifySession(cookies.sessionJWT, 600);

	if (valid === false)
		return {
			props: {
				logged_in: false
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