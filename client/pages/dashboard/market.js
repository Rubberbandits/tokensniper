import Head from "next/head";

import DashboardLayout from "../../layouts/dashboard";

import { genericGetServerSideProps } from "../../lib/verify_session";

export var getServerSideProps = genericGetServerSideProps;

export default function Market({logged_in}) {
	return (
		<div>
			
		</div>
	)
}

Market.Layout = DashboardLayout;