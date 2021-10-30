export default function TokenInfo({entry, tokenData})
{
	return (
		<tr>
			<td>#{entry + 1}</td>
			<td>{tokenData.collection.name}</td>
			<td>{tokenData.tokenId}</td>
			<td>
				{tokenData.name}
			</td>
		</tr>
	)
}