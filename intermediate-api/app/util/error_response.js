exports.errorHandler = function(err)
{
	if (err.response && err.response.data) {
		let errorMessage = err.response.data.errors[0].message;

		return `OpenSea error: ${errorMessage}`;
	}

	if (err.request) {
		return `Network error: ${err.request}`
	}

	if (err.message) {
		return `Invalid request: ${err.message}`;
	}

	return `API error: ${err.response.status} ${err.response.statusText}`;
}