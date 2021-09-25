import React from "react";
import Script from "next/script";

import 'tailwindcss/tailwind.css';
import '../styles.css';

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout ? Component.Layout : React.Fragment;

	return (
		<>
			<Script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js" strategy="beforeInteractive"/>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
