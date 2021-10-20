import Script from "next/script";

/* This shit is ugly as sin */

const getHoldingsData = async () => {
	if (!process.browser) return

	function addRow(rowData) 
	{
		const {index, contractName, tokenID, tokenName, prevFloor, curFloor, delta, traitFloor} = rowData;

		const tr = document.createElement("tr");

		const count = document.createElement("th");
		count.innerText = index || "";
		tr.appendChild(count);

		const eContractName = document.createElement("th");
		eContractName.innerText = contractName || "";
		tr.appendChild(eContractName);

		const eTokenID = document.createElement("td");
		eTokenID.innerText = tokenID || "";
		tr.appendChild(eTokenID);

		const eTokenName = document.createElement("td");
		eTokenName.innerText = tokenName || "";
		tr.appendChild(eTokenName);

		const ePreviousFloor = document.createElement("th");
		ePreviousFloor.innerText = prevFloor || "";
		tr.appendChild(ePreviousFloor);

		const eCurrentFloor = document.createElement("th");
		eCurrentFloor.innerText = curFloor || "";
		tr.appendChild(eCurrentFloor);

		const eFloorDelta = document.createElement("th");
		eFloorDelta.innerText = delta || "";
		tr.appendChild(eFloorDelta);

		if (traitFloor) {
			const eTraitFloor = document.createElement("td");

			const eTraitFloorLink = document.createElement("a");
			eTraitFloorLink.href = traitFloor;
			eTraitFloorLink.target = "_blank";
			eTraitFloorLink.innerText = "View";

			eTraitFloor.appendChild(eTraitFloorLink);
			tr.appendChild(eTraitFloor);
		}

		holdingsBody.appendChild(tr);

		return tr;
	}

	const publicAddress = sessionStorage.getItem("publicAddress")

	fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${publicAddress}&offset=0`)
		.then(res => res.json())
		.then(res => {
			holdingsBody.removeChild(holdingsLoading);

			res.forEach(collection => {
				fetch(`https://api.opensea.io/api/v1/assets?owner=${publicAddress}&asset_contract_address=${collection.primary_asset_contracts[0].address}&order_direction=desc&offset=0&limit=50`)
					.then(res => res.json())
					.then(data => {
						addRow({
							contractName: collection.name,
							curFloor: collection.stats.floor_price,
						})

						data.assets.forEach(asset => {
							console.log(asset.orders);
							asset.traits.sort((a, b) => {return a.trait_count - b.trait_count})
							const rarestTrait = asset.traits[0];

							const url = `https://opensea.io/collection/${collection.slug}?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=${rarestTrait.trait_type}&search[stringTraits][0][values][0]=${rarestTrait.value}&search[toggles][0]=BUY_NOW`

							const row = addRow({
								tokenID: asset.token_id,
								tokenName: asset.name,
								traitFloor: url
							})
						})
					})
			})
		})
}
export default function AccountHoldings() {
	return (
		<>
			<Script async onLoad={getHoldingsData()}/>

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
						<tr id="holdingsLoading">
							<th></th> 
							<td>Loading...</td> 
						</tr>
					</tbody> 
				</table>
			</div>
		</>
	)
}