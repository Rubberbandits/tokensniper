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
	info.collection.edges.forEach(asset => {
		let tokenData = asset.node.asset;

		entries.push(<TokenInfo tokenData={tokenData}/>);
	})

	console.log(info)
	return (
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
	)
}