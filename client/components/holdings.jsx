import dynamic from "next/dynamic";

const CollectionInfo = dynamic(() => import('./collection_info'), {
	ssr: false
})

export default function AccountHoldings() {
	return (
		<>
			<div class="overflow-x-auto">
				<table id="holdings" data-theme="light" class="table w-full table-compact text-onyx">
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
					<tbody id="holdingsBody">
						{process.browser && <CollectionInfo walletAddr={sessionStorage.getItem("publicAddress")}/>}
					</tbody> 
				</table>
			</div>
		</>
	)
}