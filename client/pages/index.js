import Head from 'next/head'

export default function Home() {
  return (
    <div>
		<Head>
			<title>Vorsin</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<header class="text-gray-400 bg-gray-900 body-font">
			<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
				</svg>
				<span class="ml-3 text-xl">Vorsin</span>
				</a>
				<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
				<a href="#home" class="mr-5 hover:text-gray text-white">Home</a>
				<a href="#features" class="mr-5 hover:text-gray text-white">Features</a>
				<a href="#pricing" class="mr-5 hover:text-gray text-white">Pricing</a>
				<a href="#team" class="mr-5 hover:text-gray text-white">Team</a>
				<a href="https://discord.gg/QMDCWC6wYV" class="mr-5 hover:text-gray text-white">Discord</a>
				</nav>
				<button class="inline-flex items-center bg-orange border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base text-white mt-4 md:mt-0">Login
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
				</button>
			</div>
		</header>

		<div id="home">
			<section class="text-gray-600 body-font">
				<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
					<img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
					<div class="text-center lg:w-2/3 w-full">
					<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
					<p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
					<div class="flex justify-center">
						<button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
						<button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
					</div>
					</div>
				</div>
			</section>
		</div>

		<div id="features">
			<section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-20">
					<h2 class="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
					<h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
					</div>
					<div class="flex flex-wrap -m-4">
					<div class="p-4 md:w-1/3">
						<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
						<div class="flex items-center mb-3">
							<div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
							</svg>
							</div>
							<h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
						</div>
						<div class="flex-grow">
							<p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
							<a class="mt-3 text-yellow-500 inline-flex items-center">Learn More
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
							</a>
						</div>
						</div>
					</div>
					<div class="p-4 md:w-1/3">
						<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
						<div class="flex items-center mb-3">
							<div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
							</div>
							<h2 class="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
						</div>
						<div class="flex-grow">
							<p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
							<a class="mt-3 text-yellow-500 inline-flex items-center">Learn More
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
							</a>
						</div>
						</div>
					</div>
					<div class="p-4 md:w-1/3">
						<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
						<div class="flex items-center mb-3">
							<div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<circle cx="6" cy="6" r="3"></circle>
								<circle cx="6" cy="18" r="3"></circle>
								<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
							</svg>
							</div>
							<h2 class="text-gray-900 text-lg title-font font-medium">Neptune</h2>
						</div>
						<div class="flex-grow">
							<p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
							<a class="mt-3 text-yellow-500 inline-flex items-center">Learn More
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
							</a>
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
					<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
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
							</span>Vexillologist pitchfork
						</p>
						<p class="flex items-center text-gray-600 mb-2">
							<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
								<path d="M20 6L9 17l-5-5"></path>
							</svg>
							</span>Tumeric plaid portland
						</p>
						<p class="flex items-center text-gray-600 mb-2">
							<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
								<path d="M20 6L9 17l-5-5"></path>
							</svg>
							</span>Hexagon neutra unicorn
						</p>
						<p class="flex items-center text-gray-600 mb-6">
							<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
								<path d="M20 6L9 17l-5-5"></path>
							</svg>
							</span>Mixtape chillwave tumeric
						</p>
						<button class="flex items-center mt-auto text-white bg-yellow-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-yellow-600 rounded">Button
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</button>
						<p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
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
					<p class="lg:w-2/3 mx-auto leading-relaxed text-base">Team Description</p>
					</div>
					<div class="flex flex-wrap -m-4">
					<div class="p-4 lg:w-1/4 md:w-1/2">
						<div class="h-full flex flex-col items-center text-center">
						<img alt="team" class="flex-shrink-0 rounded-lg w-full h-128 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
						<div class="w-full">
							<h2 class="title-font font-medium text-lg text-gray-900">rusty</h2>
							<h3 class="text-gray-500 mb-3">Lead Developer</h3>
							<p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
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
							<p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
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
							<h3 class="text-gray-500 mb-3">Marketing</h3>
							<p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
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
							<h3 class="text-gray-500 mb-3">Marketing</h3>
							<p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
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
				<span class="ml-3 text-xl">Vorsin</span>
				</a>
				<p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 Vorsin
				</p>
			</div>
		</footer>
    </div>
  )
}
