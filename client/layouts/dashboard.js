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

			<main class="flex bg-white">
				<div class="w-full py-6 sm:px-6 lg:px-8">
					{children}
				</div>
			</main>
		</>
	)
}