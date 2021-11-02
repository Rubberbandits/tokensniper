const nightmare = require('../../config/nightmare');

exports.main = function(req, res) {
	const {body} = req;

	let queryID = body.query;
	let variables = body.variables;

	if (!nightmare.GRAPHQL_MAP[queryID])
	{
		res.status(404).send("Not found.");
		return;
	}

	//try {
		nightmare.gqlRun(queryID, variables, (data) => {
			if (!data.data && data.errors) {
				res.status(500).send(data);
				return;
			}

			res.status(200).send(data);
		});
	/*} catch {
		res.status(500).send("An error has occurred.")
	}*/
}