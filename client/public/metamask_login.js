let web3 = null;

async function LoginFlow() 
{
	// Check if MetaMask is installed
	if (!ethereum) {
		alert('Please install MetaMask first.');
		return;
	}

	if (!web3) {
		try {
			// Request account access if needed
			await ethereum.enable();

			// We don't know window.web3 version, so we use our own instance of Web3
			// with the injected provider given by MetaMask
			web3 = new Web3(ethereum);
		} catch (error) {
			console.log(error)
			alert('You need to allow MetaMask.');
			return;
		}
	}

	const coinbase = await web3.eth.getCoinbase();
	if (!coinbase) {
		alert('Please activate MetaMask first.');
		web3 = null;
		return;
	}

	const publicAddress = coinbase.toLowerCase();

	fetch('/api/authenticate?publicAddress=' + publicAddress)
		.then(res => res.json())
		.then(res => {
			let nonce = res.nonce;

			web3.eth.personal.sign(`I am signing my one-time nonce: ${nonce}`, publicAddress, '')
				.then(signature => {
					SendLoginRequest(publicAddress, signature);
				})
				.catch(err => {
					alert(err.message);
				});
		})
		.catch(err => {
			alert(err);
		});
}

function SendLoginRequest(publicAddress, signature)
{
	fetch('/api/authenticate', {
		method: 'POST',
		body: JSON.stringify({
			address: publicAddress,
			signature: signature,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	})
	.then(response => response.json())
	.then(data => {
		if (data.logged_in) {
			document.cookie = "jwt=" + data.token + "; Path=/;";

			window.location.assign("/dashboard/")
		}
	})
	.catch(err => {
		console.log(err)
	});
}

login.addEventListener("click", async function() {
	await LoginFlow();
})