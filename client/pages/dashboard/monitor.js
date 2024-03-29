import Head from "next/head";

import DashboardLayout from "../../layouts/dashboard";

import { genericGetServerSideProps } from "../../lib/verify_session";

export var getServerSideProps = genericGetServerSideProps;

export default function Monitor({logged_in}) {
	return (
		<div className="mt-8 justify-self-center">
			<h2 className="card-title text-onyx">Contract Monitor - WIP</h2> 
		</div>
	)
}

Monitor.Layout = DashboardLayout;