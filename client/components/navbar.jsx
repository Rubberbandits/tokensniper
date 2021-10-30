const handleLogout = () => {
	fetch('/api/logout')
		.then(res => res.json())
		.then(res => {
			if (res !== 1) {
				alert("There was an error while attempting to logout! Code: " + res)
				return;
			}

			window.location.assign("/dashboard/")
		})
		.catch(err => {
			alert(err);
		});
}

export default function NavBar() {
	return (
		<nav class="bg-gray-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between h-16">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
								</svg>
								<span class="ml-3 text-xl">Vorsin Tools</span>
							</a>
						</div>

						<div class="hidden md:block">
							<div class="ml-10 flex items-baseline space-x-4">
								<a href="/dashboard" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>

								<a href="/dashboard/metadata" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Metadata</a>

								<a href="/dashboard/market" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Market</a>

								<a href="/dashboard/holdings" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Holdings</a>

								<a href="/dashboard/monitor" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Monitor</a>
							</div>
						</div>
					</div>

					<div class="ml-4 flex items-center md:ml-6">
						<button onClick={handleLogout} class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div class="md:hidden" id="mobile-menu">
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

					<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Metadata</a>

					<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Market</a>

					<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Holdings</a>

					<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Monitor</a>
				</div>

				<div class="pt-4 pb-3 border-t border-gray-700">
					<div class="mt-3 px-2 space-y-1">
						<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
					</div>
				</div>
			</div>
		</nav>
	)
}