import Head from "next/head";

import DashboardLayout from "../../layouts/dashboard";

import Login from "../../components/login";

import { VerifySession, RefreshSession, RetrieveNonce } from "../../lib/verify_session";

function LoadingScreen() {
	return (
		<div className="flex justify-center align-middle h-screen bg-gray-700">
			<Head>
				<title>Vorsin Tools - Loading</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex justify-center align-middle">
				<button class="btn btn-lg btn-ghost loading flex align-middle">loading</button>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const {res, req} = context;
	const {cookies} = req;

	if (!cookies.sessionJWT || cookies.sessionJWT.length == 0) 
		return {
			props: {
				logged_in: false
			}
		}

	const {valid, err, payload} = await VerifySession(cookies.sessionJWT, 600);

	if (payload.session != true)
		return {
			props: {
				logged_in: false
			}
		}

	if (valid === false) {
		if (err.code === 'ERR_JWT_EXPIRED') {
			const {valid, err, payload} = await VerifySession(cookies.refreshJWT, 86400);
			const publicAddress = payload.aud;

			if (valid && payload.refresh) {
				const nonce = await RetrieveNonce(publicAddress.toLowerCase());
				if (nonce != payload.nonce) {
					return {
						props: {
							logged_in: false
						}
					}
				}

				const { sessionJWT, refreshJWT } = await RefreshSession(publicAddress, "10m", "24h", payload.iat);

				res.setHeader('Set-Cookie', ['sessionJWT=' + sessionJWT, 'refreshJWT=' + refreshJWT]);

				return {
					props: {
						logged_in: true
					}
				}
			}
		}

		return {
			props: {
				logged_in: false
			}
		}
	}

	return {
		props: {
			logged_in: true
		}
	}
}

export default function Dashboard({logged_in}) {
	if (logged_in === true) 
		return (
			<> 
				<Head>
					<title>Vorsin Tools - Dashboard</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<div class="flex flex-wrap flex-row justify-center">
					<div class="card shadow xl:ml-0 mr-4">
						<div class="card-body">
							<h2 class="card-title text-onyx">Monitor Summary</h2> 

							<div class="overflow-x-auto">
								<table data-theme="light" class="table w-full table-compact text-onyx">
									<thead>
										<tr>
											<th></th> 
											<th>Contract Name</th> 
											<th>Variable</th> 
											<th>Current Value</th> 
											<th>Linked Action</th> 
										</tr>
									</thead> 
									<tbody>
										<tr>
											<th></th> 
											<td>No monitored contracts...</td>
										</tr>
										<tr>
											<th></th> 
											<td>No monitored contracts...</td>
										</tr>
										<tr>
											<th></th> 
											<td>No monitored contracts...</td>
										</tr>
										<tr>
											<th></th> 
											<td>No monitored contracts...</td>
										</tr>
										<tr>
											<th></th> 
											<td>No monitored contracts...</td>
										</tr>
										<tr>
											<th></th> 
											<td>No monitored contracts...</td>
										</tr>
										<tr>
											<th></th> 
											<td>No monitored contracts...</td>
										</tr>
										<tr>
											<th></th> 
											<td>No monitored contracts...</td>
										</tr>
										<tr>
											<th></th> 
											<td>No monitored contracts...</td>
										</tr>
										<tr>
											<th></th> 
											<td>No monitored contracts...</td>
										</tr>
									</tbody> 
								</table>
							</div>
						</div>
					</div>

					<div class="card shadow">
						<div class="card-body">
							<h2 class="card-title text-onyx">Market Movements</h2> 

							<div class="overflow-x-auto">
								<table data-theme="light" class="table w-full table-compact text-onyx">
									<thead>
										<tr>
											<th></th> 
											<th>Contract Name</th> 
											<th>Previous Floor</th> 
											<th>Current Floor</th> 
											<th>1h Volume</th> 
											<th>24h Volume</th> 
											<th>7d Volume</th> 
											<th>All-Time Volume</th> 
										</tr>
									</thead> 
									<tbody>
										<tr>
											<th></th> 
											<td>N/A</td> 
										</tr>
									</tbody> 
								</table>
							</div>
						</div>
					</div>

					<div class="card shadow lg:mt-4">
						<div class="card-body">
							<h2 class="card-title text-onyx">Holdings Summary</h2> 

							<div class="overflow-x-auto">
								<table data-theme="light" class="table w-full table-compact text-onyx">
									<thead>
										<tr>
											<th></th> 
											<th>Token ID</th> 
											<th>Name</th> 
											<th>Quantity</th> 
											<th>Previous Floor</th>
											<th>Current Floor</th>
											<th>Percentage Delta</th>
											<th>Trait Floor</th>
										</tr>
									</thead> 
									<tbody>
										<tr>
											<th></th> 
											<td>No tokens to display...</td> 
										</tr>
									</tbody> 
								</table>
							</div>
						</div>
					</div>
				</div>
			</>
		)

	return <LoadingScreen />
}

Dashboard.Layout = DashboardLayout;