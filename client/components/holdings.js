import Script from "next/script";

/* This shit is ugly as sin */

const getHoldingsData = () => {
	if (!process.browser) return

	const publicAddress = sessionStorage.getItem("publicAddress")

	fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${publicAddress}&offset=0`)
		.then(res => res.json())
		.then(res => {
			holdingsBody.removeChild(holdingsLoading);

			res.forEach(collection => {
				fetch(`https://api.opensea.io/api/v1/assets?owner=${publicAddress}&asset_contract_address=${collection.primary_asset_contracts[0].address}&order_direction=desc&offset=0&limit=50`)
					.then(res => res.json())
					.then(data => {
						const tr = document.createElement("tr");

						const count = document.createElement("th");
						count.innerText = "";
						tr.appendChild(count);
		
						const contractName = document.createElement("th");
						contractName.innerText = collection.name;
						tr.appendChild(contractName);
		
						const tokenID = document.createElement("th");
						tokenID.innerText = "";
						tr.appendChild(tokenID);
		
						const tokenName = document.createElement("th");
						tokenName.innerText = "";
						tr.appendChild(tokenName);
		
						const prevFloor = document.createElement("th");
						prevFloor.innerText = "";
						tr.appendChild(prevFloor);
		
						const curFloor = document.createElement("th");
						curFloor.innerText = collection.stats.floor_price;
						tr.appendChild(curFloor);
		
						const delta = document.createElement("th");
						delta.innerText = "";
						tr.appendChild(delta);
		
						const traitFloor = document.createElement("th");
						traitFloor.innerText = "";
						tr.appendChild(traitFloor);
		
						holdingsBody.appendChild(tr);

						data.assets.forEach(asset => {
							const tr = document.createElement("tr");

							const count = document.createElement("td");
							count.innerText = "";
							tr.appendChild(count);
			
							const contractName = document.createElement("td");
							contractName.innerText = "";
							tr.appendChild(contractName);
			
							const tokenID = document.createElement("td");
							tokenID.innerText = asset.token_id;
							tr.appendChild(tokenID);
			
							const tokenName = document.createElement("td");
							tokenName.innerText = asset.name;
							tr.appendChild(tokenName);
			
							const prevFloor = document.createElement("td");
							prevFloor.innerText = "";
							tr.appendChild(prevFloor);
			
							const curFloor = document.createElement("td");
							curFloor.innerText = "";
							tr.appendChild(curFloor);
			
							const delta = document.createElement("td");
							delta.innerText = "";
							tr.appendChild(delta);
			
							const traitFloor = document.createElement("td");
							traitFloor.innerText = "";
							tr.appendChild(traitFloor);
			
							holdingsBody.appendChild(tr);
						})
					})
			})
		})
}
export default function AccountHoldings() {
	return (
		<>
			<Script onLoad={getHoldingsData()}/>

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