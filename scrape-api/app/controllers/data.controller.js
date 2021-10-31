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

	nightmare.gqlRun(queryID, variables, (data) => {
		res.status(200).send(data);
	});
}