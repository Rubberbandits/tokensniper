import Head from "next/head";

import DashboardLayout from "../../layouts/dashboard";

import { genericGetServerSideProps } from "../../lib/verify_session";

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

export var getServerSideProps = genericGetServerSideProps;

export default function Dashboard({logged_in}) {
	if (logged_in === true) 
		return (
			<> 
				<Head>
					<title>Vorsin Tools - Dashboard</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<div class="outline-black mt-4 h-96">

				</div>
			</>
		)

	return <LoadingScreen />
}

Dashboard.Layout = DashboardLayout;