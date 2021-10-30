import DeepTokenInfo from "./deep_token_info";

function OpenTokenDrawer(entry)
{
	document.getElementById(entry + "_drawer").classList.toggle("hidden");
}

export default function TokenInfo({entry, tokenData})
{
	return (
		<>
			<tr onClick={() => {OpenTokenDrawer(entry)}}>
				<td>#{entry + 1}</td>
				<td>{tokenData.collection.name}</td>
				<td>{tokenData.tokenId}</td>
				<td>{tokenData.name}</td>
			</tr>

			<tr id={entry + "_drawer"} className="hidden">
				<td>
					<div className="overflow-visible flex w-0 ml-12">
						<DeepTokenInfo tokenData={tokenData} />
					</div>
				</td>
			</tr>
		</>
	)
}