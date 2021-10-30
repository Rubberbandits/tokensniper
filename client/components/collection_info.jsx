import TokenInfo from "./token_info";
import Loading from "./loading";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())
function GetWalletCollection(walletAddr)
{
	const { data, error } = useSWR(`/api/dashboard/getWalletCollection?publicAddress=${walletAddr}`, fetcher)

	return {
		collection: data,
		isLoading: !error && !data,
		isError: error
	}
}

export default function CollectionInfo({walletAddr})
{
	const info = GetWalletCollection(walletAddr);
	if (info.isLoading) {
		return <Loading />
	}

	let entries = [];
	info.collection.edges.forEach((asset, index) => {
		let tokenData = asset.node.asset;

		entries.push(<TokenInfo entry={index} tokenData={tokenData}/>);
	})

	console.log(info)
	return (
		<>
			<div data-theme="light" className="form-control w-96 m-2">
				<label className="label">
					<span className="label-text">Wallet Address</span>
				</label> 
				<div className="flex space-x-2">
					<input id="walletAddr" type="text" placeholder="Search" className="w-full input" /> 
					<button className="btn">go</button>
				</div>
			</div>

			<table data-theme="light" className="table w-full table-compact text-onyx">
				<thead>
					<tr>
						<th></th> 
						<th>Contract</th>
						<th>Token ID</th>
						<th>Name</th>
						<th>Previous Floor</th>
						<th>Current Floor</th>
						<th>Percentage Delta</th>
						<th>Trait Floor</th>
					</tr>
				</thead>

				<tbody>
					{[...entries]}
				</tbody> 
			</table>
		</>
	)
}