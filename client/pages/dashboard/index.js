import Head from 'next/head'
import Dashboard from './dashboard'
import Login from './login'

function LoadingScreen() {
	return (
		<div className="flex justify-center align-center translate-y-20">
			<button class="btn btn-lg btn-ghost loading">loading</button>
		</div>
	)
}

export default function Home() {
	return (
	<div className="h-screen bg-gray-700">
		<Head>
			<title>Vorsin Tools - Dashboard</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Dashboard />
	</div>
  )
}