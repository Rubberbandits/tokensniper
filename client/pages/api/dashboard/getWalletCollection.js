import { genericGetServerSideProps } from "../../../lib/verify_session";

export var getServerSideProps = genericGetServerSideProps;

export default async function getWalletCollection(req, res) 
{
	const {query: {publicAddress}} = req;

	const response = await fetch(`http://localhost:4000/data/account?publicAddress=${publicAddress}`)
		.then(res => res.json())
	
	res.status(200).send(response);
}