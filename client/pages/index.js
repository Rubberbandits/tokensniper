import Head from 'next/head'

export default function Home() {
  return (
    <div class="bg-white">
		<Head>
			<title>Vorsin Tools</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<header class="text-gray-400 bg-gray-900 body-font">
			<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
				</svg>
				<span class="ml-3 text-xl">Vorsin Tools</span>
				</a>
				<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
				<a href="#home" class="mr-5 hover:text-gray text-white">Home</a>
				<a href="#features" class="mr-5 hover:text-gray text-white">Features</a>
				<a href="#pricing" class="mr-5 hover:text-gray text-white">Pricing</a>
				<a href="#team" class="mr-5 hover:text-gray text-white">Team</a>
				<a href="https://discord.gg/QMDCWC6wYV" class="mr-5 hover:text-gray text-white">Discord</a>
				</nav>
			</div>
		</header>

		<div id="home">	
		  <section class="text-blueGray-700 ">
            <div class="container flex flex-col items-center px-5 py-8 mx-auto">
              <div class="flex flex-col w-full mb-12 text-left ">
                <div class="w-full mx-auto lg:w-1/2">
                  <h1 class="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">Become an ERC-721 power-user.</h1>
                  <h2 class="mx-auto mb-12 text-xl font-semibold leading-none tracking-tighter text-black title-font">Take every advantage in a diverse and fast-paced market.</h2>
                  <p class="mx-auto text-base font-medium leading-relaxed text-gray-500 ">Every investor must have cutting edge tools to assure profit maximization and smart allocation of liquidity. Vorsin specializes in ERC-721 tokens and market trends in the non-fungible token space.</p>
                </div>
              </div>
              <div class="container px-5 mx-auto flex flex-wrap">
					<div class="flex flex-wrap md:-m-2 -m-1">
						<div class="flex flex-wrap w-1/2">
							<div class="md:p-2 p-1 w-1/2">
							<img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300.png&text=++PLACEHOLDER" />
							</div>
							<div class="md:p-2 p-1 w-1/2">
							<img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300.png&text=++PLACEHOLDER" />
							</div>
							<div class="md:p-2 p-1 w-full">
							<img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360.png&text=++PLACEHOLDER" />
							</div>
						</div>
						<div class="flex flex-wrap w-1/2">
							<div class="md:p-2 p-1 w-full">
							<img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360.png&text=++PLACEHOLDER" />
							</div>
							<div class="md:p-2 p-1 w-1/2">
							<img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300.png&text=++PLACEHOLDER" />
							</div>
							<div class="md:p-2 p-1 w-1/2">
							<img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300.png&text=++PLACEHOLDER" />
							</div>
						</div>
					</div>
				</div>
            </div>
          </section>
		</div>

		<div id="features">
			<section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-20">
					<h2 class="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">MORE THAN SOFTWARE</h2>
					<h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Features</h1>
					</div>
					<div class="flex flex-wrap -m-4">
					<div class="p-4 md:w-1/3">
						<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
						<div class="flex items-center mb-3">
							<div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path></svg>
							</div>
							<h2 class="text-gray-900 text-lg title-font font-medium">Metadata Capturing</h2>
						</div>
						<div class="flex-grow">
							<p class="leading-relaxed text-base">In the land of the blind, the one-eyed man is king. Vorsin utilizes industry-leading techniques to collect metadata as soon as it is released, allowing you to make informed purchases instead of relying on chance. Vorsin reveals all.</p>
						</div>
						</div>
					</div>

					<div class="p-4 md:w-1/3">
						<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
						<div class="flex items-center mb-3">
							<div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd"></path></svg>
							</div>
							<h2 class="text-gray-900 text-lg title-font font-medium">Smart Contract Monitor</h2>
						</div>
						<div class="flex-grow">
							<p class="leading-relaxed text-base">From anywhere in the world, be the first to know when a collection goes live. Vorsin allows any variable of a smart contract to be monitored, notifying you by phone, SMS or Discord of any change.</p>
						</div>
						</div>
					</div>

					<div class="p-4 md:w-1/3">
						<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
						<div class="flex items-center mb-3">
							<div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H7v6h6V7z"></path><path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd"></path></svg>
							</div>
							<h2 class="text-gray-900 text-lg title-font font-medium">Automate Tasks</h2>
						</div>
						<div class="flex-grow">
							<p class="leading-relaxed text-base">Forget about gas wars. Leverage our state-of-the-art servers to be the first to make it to any collection. Techniques based on automated trading systems used on Wall Street, let us make the purchases for you.</p>
						</div>
						</div>
					</div>

					<div class="p-4 md:w-1/3">
						<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
						<div class="flex items-center mb-3">
							<div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
							</svg>
							</div>
							<h2 class="text-gray-900 text-lg title-font font-medium">Dockerized Ethereum Node</h2>
						</div>
						<div class="flex-grow">
							<p class="leading-relaxed text-base">Instead of relying on a third-party node or API to interact with the blockchain, we host our own Ethereum node. This allows the platform to make lighning-fast requests, blazing past the competition where it matters.</p>
						</div>
						</div>
					</div>
					<div class="p-4 md:w-1/3">
						<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
						<div class="flex items-center mb-3">
							<div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
							</div>
							<h2 class="text-gray-900 text-lg title-font font-medium">C# for Speed, Node.JS for Simplicity</h2>
						</div>
						<div class="flex-grow">
							<p class="leading-relaxed text-base">Vorsin relies on both C# and Node.JS, making speed-critical systems lightning fast and platform back-end easily scalable.</p>
						</div>
						</div>
					</div>

					<div class="p-4 md:w-1/3">
						<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
						<div class="flex items-center mb-3">
							<div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path></svg>
							</div>
							<h2 class="text-gray-900 text-lg title-font font-medium">Street Sweeper? Floor Sweeper.</h2>
						</div>
						<div class="flex-grow">
							<p class="leading-relaxed text-base">Find tokens at floor price before they explode in value. When using Vorsin's tools in concert, we guarantee success in collection releases, leveraging your ethereum to it's fullest potential.</p>
						</div>
						</div>
					</div>
					</div>
				</div>
			</section>
		</div>

		<div id="pricing">
			<section class="text-gray-600 body-font overflow-hidden">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-20">
					<h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
					<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Massive benefit for a fair price.</p>
					</div>
					<div class="flex flex-wrap -m-4 justify-center">
					<div class="p-4 xl:w-1/4 md:w-1/2 w-full">
						<div class="h-full p-6 rounded-lg border-2 border-yellow-500 flex flex-col relative overflow-hidden">
						<h2 class="text-sm tracking-widest title-font mb-1 font-medium">FULL ACCESS</h2>
						<h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
							<span>0.1</span>
							<span class="text-lg ml-1 font-normal text-gray-500">ETH/mo</span>
						</h1>
						<p class="flex items-center text-gray-600 mb-2">
							<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
								<path d="M20 6L9 17l-5-5"></path>
							</svg>
							</span>Metadata capturing
						</p>
						<p class="flex items-center text-gray-600 mb-2">
							<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
								<path d="M20 6L9 17l-5-5"></path>
							</svg>
							</span>Smart contract monitoring
						</p>
						<p class="flex items-center text-gray-600 mb-2">
							<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
								<path d="M20 6L9 17l-5-5"></path>
							</svg>
							</span>Platform-hosted wallet
						</p>
						<p class="flex items-center text-gray-600 mb-2">
							<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
								<path d="M20 6L9 17l-5-5"></path>
							</svg>
							</span>Automated contract interactions
						</p>
						<p class="flex items-center text-gray-600 mb-6">
							<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
								<path d="M20 6L9 17l-5-5"></path>
							</svg>
							</span>Private Discord access
						</p>
						<button class="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded" disabled>Purchase
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</button>
						<p class="text-xs text-gray-500 mt-3">Purchase and sign-up is done with your personal wallet.</p>
						</div>
					</div>
					</div>
				</div>
			</section>
		</div>

		<div id="team" className="bg-white">
			<section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-20">
					<h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
					<p class="lg:w-2/3 mx-auto leading-relaxed text-base">World-class development meets crypto-currency expertise, our team is a unification of skill and passion. </p>
					</div>
					<div class="flex flex-wrap -m-4">
					<div class="p-4 lg:w-1/4 md:w-1/2">
						<div class="h-full flex flex-col items-center text-center">
						<img alt="team" class="flex-shrink-0 rounded-lg w-full h-128 object-cover object-center mb-4" src="/rusty.png" />
						<div class="w-full">
							<h2 class="title-font font-medium text-lg text-gray-900">rusty</h2>
							<h3 class="text-gray-500 mb-3">Lead Developer</h3>
							<p class="mb-4">Read "Smart Contracts for Dummies" and decided to develop his own bleeding-edge tools. Owns a DigitalGangster.</p>
							<span class="inline-flex">
							<a class="ml-2 text-gray-500">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a class="ml-2 text-gray-500">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
								</svg>
							</a>
							</span>
						</div>
						</div>
					</div>
					<div class="p-4 lg:w-1/4 md:w-1/2">
						<div class="h-full flex flex-col items-center text-center">
						<img alt="team" class="flex-shrink-0 rounded-lg w-full h-128 object-cover object-center mb-4" src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4e/4ed0b412a943b60d4dc5d2330c33d3279ebd85a1_full.jpg" />
						<div class="w-full">
							<h2 class="title-font font-medium text-lg text-gray-900">razor</h2>
							<h3 class="text-gray-500 mb-3">Developer</h3>
							<p class="mb-4">Who knew Germany decided to colonize IDA Pro? An expert in reverse-engineering, razor started in the game-hacking scene.</p>
							<span class="inline-flex">
							</span>
						</div>
						</div>
					</div>
					<div class="p-4 lg:w-1/4 md:w-1/2">
						<div class="h-full flex flex-col items-center text-center">
						<img alt="team" class="flex-shrink-0 rounded-lg w-full h-128 object-cover object-center mb-4" src="https://lh3.googleusercontent.com/N_ZKOnP-tOgG8cfCYcbg7fk5xFsX1xQ53L0J5hqS6NGaLCfFgEi44Ws0L3nHbCQlb8V7jvW99P5ehOgT7GdfrttOCMqLxo_f5tdbRg=w600" />
						<div class="w-full">
							<h2 class="title-font font-medium text-lg text-gray-900">darku</h2>
							<h3 class="text-gray-500 mb-3">Market Analyst</h3>
							<p class="mb-4">Reincarnated stock-broker, first man to walk in NFT-space, international man of mystery, files his own taxes.</p>
							<span class="inline-flex">
							<a class="ml-2 text-gray-500">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a class="ml-2 text-gray-500">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
								</svg>
							</a>
							</span>
						</div>
						</div>
					</div>
					<div class="p-4 lg:w-1/4 md:w-1/2">
						<div class="h-full flex flex-col items-center text-center">
						<img alt="team" class="flex-shrink-0 rounded-lg w-full h-128 object-cover object-center mb-4" src="https://lh3.googleusercontent.com/cFQFas5LPtS2vsF2NwCiqrQCq64AdI5dUeZgHxXgpScHAZeUE90S3zpy48pGdMyaQ77hRJqEUc0zTCks1fP-Me2tj8EXoZwV8YaL=w600" />
						<div class="w-full">
							<h2 class="title-font font-medium text-lg text-gray-900">jones</h2>
							<h3 class="text-gray-500 mb-3">Market Analyst</h3>
							<p class="mb-4">Vorsin Technologies guinea pig and idea machine, entrusted all of his liquidity to the pre-alpha version of our tools and somehow still made money.</p>
							<span class="inline-flex">
							<a class="ml-2 text-gray-500">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a class="ml-2 text-gray-500">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
								</svg>
							</a>
							</span>
						</div>
						</div>
					</div>
					</div>
				</div>
			</section>
		</div>

		<footer class="text-gray-600 body-font">
			<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-orange rounded-full" viewBox="0 0 24 24">
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
				</svg>
				<span class="ml-3 text-xl">Vorsin Tools</span>
				</a>
				<p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 Vorsin Technologies
				</p>
			</div>
		</footer>
    </div>
  )
}
