import Head from "next/head";

import DashboardLayout from "../../layouts/dashboard";

import { genericGetServerSideProps } from "../../lib/verify_session";

export var getServerSideProps = genericGetServerSideProps;

export default function Market({logged_in}) {
	return (
		<div class="mt-8 justify-self-center">
			<h2 class="card-title text-onyx">Market - WIP</h2> 
		</div>
	)
}

Market.Layout = DashboardLayout;