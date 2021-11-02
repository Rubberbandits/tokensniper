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
	info.collection.assets.forEach((tokenData, index) => {
		entries.push(<TokenInfo key={index} entry={index} tokenData={tokenData}/>);
	})

	return (
		<>
			<div data-theme="light" className="form-control w-96 mb-2 self-end">
				<div className="flex space-x-2">
					<input id="walletAddr" type="text" placeholder="Address" className="w-full input" /> 
					<button className="btn">go</button>
				</div>
			</div>

			<table data-theme="light" className="table w-full table-compact text-onyx">
				<thead>
					<tr>
						<th className="overflow-visible w-0 relative"></th> 
						<th>Contract</th>
						<th>Token ID</th>
						<th>Name</th>
						<th>Previous Floor</th>
						<th>Current Floor</th>
						<th>Previous Trait Floor</th>
						<th>Current Trait Floor</th>
					</tr>
				</thead>

				<tbody>
					{[...entries]}
				</tbody> 
			</table>
		</>
	)
}