const discord = require("./discord.js");
const twilio = require("./twilio.js");

function Send(text) {
	let _promise = new Promise((resolve, reject) => {
		discord.Broadcast(text)
			.then(() => {
				twilio.BroadcastCall(text)
					.then(() => {
						resolve();
					});
			});
	});

	return _promise;
};

exports.Send = Send