import Head from "next/head";

import DashboardLayout from "../../layouts/dashboard";

import AccountHoldings from "../../components/holdings";

import { genericGetServerSideProps } from "../../lib/verify_session";

export var getServerSideProps = genericGetServerSideProps;

export default function Holdings({logged_in}) {
	return (
		<div>
			<Head>
				<title>Vorsin Tools - Holdings</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="mt-8 justify-self-center">
				<h2 className="card-title text-onyx">Holdings</h2> 

				<AccountHoldings />
			</div>
		</div>
	)
}

Holdings.Layout = DashboardLayout;