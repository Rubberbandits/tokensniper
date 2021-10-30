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
					<svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
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