import Head from 'next/head'
import Script from 'next/script'

export default function Login() {
	return (
	<>
		<Head>
			<title>Vorsin Tools - Login</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className="h-screen bg-gray-700">
			<Script src="/metamask_login.js" strategy="afterInteractive" />

			<div class="container mx-auto flex flex-wrap flex-col items-center h-full justify-center">
				<a class="flex title-font font-medium items-center text-white mb-12 md:mb-12">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span class="ml-3 text-xl">Vorsin Tools</span>
				</a>
				
				<button id="login" class="btn btn-wide btn-lg bg-orange hover:bg-onyx mb-2">Login with Metamask</button>
				<a href="/" class="btn btn-wide btn-lg bg-orange hover:bg-onyx">Go back to Home</a>
			</div>
		</div>
	</>
  )
}