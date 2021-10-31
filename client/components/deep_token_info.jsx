import Loading from "./loading";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())
function GetDeepTokenInfo(contractAddress, tokenId)
{
	//const { data, error } = useSWR(`/api/dashboard/getDeepTokenInfo?contractAddress=${contractAddress}?tokenId=${tokenId}`, fetcher)

	return {
		data: {},
		isLoading: false,
		isError: false
	}
}

export default function DeepTokenInfo({tokenData})
{
	let contractAddress = tokenData.assetContract.address;
	let tokenId = tokenData.tokenId;

	const info = GetDeepTokenInfo(contractAddress, tokenId);
	if (info.isLoading) {
		return <Loading />;
	}

	return (
		<>
			<p>DRAWER IS OPEN ----------- DATA DATA DATA DATA DATA HERE</p>
		</>
	);
}