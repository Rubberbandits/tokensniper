const {Webhook, MessageBuilder} = require('discord-webhook-node');

/*
	Initialize Discord Integration
*/

const hook = new Webhook(process.env.DISCORD_WEBHOOK);
const embed = new MessageBuilder();

function Message(text)
{
	let _promise = new Promise((resolve, reject) => {
		hook.send(text).then(() => {
			resolve();
		});
	});

	return _promise;
}

function Broadcast(text)
{
	return Message("@here\n\n" + text);
}

exports.Message = Message;
exports.Broadcast = Broadcast;