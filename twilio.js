const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_SECRET);

const PhoneNumbers = [
	"+19163851002",
	"+17193674119",
	"+17192871590"
]

function SendCall(_number, _message)
{
	let _promise = new Promise((resolve, reject) => {
		twilio.calls
			.create({
				twiml: `<Response><Say>${_message}</Say></Response>`,
				to: _number,
				from: '+19188945357'
			})
			.then(() => {
				resolve();
			});
	});

	return _promise;
}

function BroadcastCall(_message)
{
	let _promise = new Promise((resolve, reject) => {
		let _promises = [];

		PhoneNumbers.forEach((_number) => {
			_promises.push(SendCall(_number, _message));
		});

		Promise.all(_promises)
			.then(() => {
				resolve();
			});
	});

	return _promise;
}

function SendSMS(number, message)
{

}

function BroadcastSMS(message)
{
	
}

exports.SendCall = SendCall;
exports.BroadcastCall = BroadcastCall;