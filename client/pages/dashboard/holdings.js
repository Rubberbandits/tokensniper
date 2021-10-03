import Head from "next/head";

import DashboardLayout from "../../layouts/dashboard";

import { genericGetServerSideProps } from "../../lib/verify_session";

export var getServerSideProps = genericGetServerSideProps;

export default function Holdings({logged_in}) {
	return (
		<div>
			
		</div>
	)
}

Holdings.Layout = DashboardLayout;