import { genericGetServerSideProps } from "../../../lib/verify_session";

export var getServerSideProps = genericGetServerSideProps;

export default async function getWalletCollection(req, res) 
{
	const {query: {publicAddress}, method} = req;

	const response = await fetch("http://localhost:5000/api/scrape")
		.then(res => res.json())
	
	res.status(200).send(response.data.assets);
}