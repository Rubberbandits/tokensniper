import React from "react";
import Script from "next/script";

import 'tailwindcss/tailwind.css';
import '../styles.css';
import Login from '../components/login';

function MyApp({ Component, pageProps, router }) {
	const Layout = Component.Layout ? Component.Layout : React.Fragment;
	
	if (pageProps.logged_in === false && router.pathname.startsWith("/dashboard")) {
		return (
			<>
				<Script async src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js" strategy="afterInteractive"/>
				<Login />
			</>
		)
	}

	return (
		<>
			<Script async src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js" strategy="afterInteractive"/>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
