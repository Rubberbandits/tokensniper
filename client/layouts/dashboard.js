import useSWR from "swr";
import Script from "next/script";
import Head from "next/head";

import Login from "../components/login";

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

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function DashboardLayout({ children }) {
	const { data, error } = useSWR('/api/authenticate?publicAddress=0x0', fetcher)

	if (!data) return <LoadingScreen />
	if (data.nonce) return <Login />
	if (error) return <div>{error}</div>

  	return (
		<>
			<Head>
				<title>Vorsin Tools</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{children}
		</>
	)
}