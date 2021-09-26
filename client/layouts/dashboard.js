import Head from "next/head";

export default function DashboardLayout({ children }) {
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