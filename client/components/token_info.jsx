import React from 'react';
import DeepTokenInfo from "./deep_token_info";

export default class TokenInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	onClick() {
		this.setState((state) => ({
			open: !state.open
		}));
	}

	render() {
		let entry = this.props.entry;
		let tokenData = this.props.tokenData;

		return (
			<>
				<tr onClick={() => {this.onClick()}}>
					<td>#{entry + 1}</td>
					<td>{tokenData.collection.name}</td>
					<td>{tokenData.tokenId}</td>
					<td>{tokenData.name}</td>
				</tr>
	
				{this.state.open && <tr>
					<td>
						<div className="overflow-visible flex w-0 ml-12">
							<DeepTokenInfo tokenData={tokenData} />
						</div>
					</td>
				</tr> || null}
			</>
		)
	}
}