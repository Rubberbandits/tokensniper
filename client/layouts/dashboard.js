import Head from "next/head";
import NavBar from "../components/navbar";

export default function DashboardLayout({ children }) {
  	return (
		<>
			<Head>
				<title>Vorsin Tools</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />

			{children}
		</>
	)
}