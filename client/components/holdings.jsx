import dynamic from "next/dynamic";

const CollectionInfo = dynamic(() => import('./collection_info'), {
	ssr: false
})

export default function AccountHoldings() {
	return (
		<>
			<div class="overflow-x-auto">
				{process.browser && <CollectionInfo walletAddr={sessionStorage.getItem("publicAddress")}/>}
			</div>
		</>
	)
}