import mysql from 'serverless-mysql';

const path = require('path')
const envPath = path.resolve(process.cwd(), '.env.local')

require('dotenv').config({ path: envPath })

export const db = mysql({
	config: {
		host: process.env.MYSQL_HOST,
		database: process.env.MYSQL_DATABASE,
		user: process.env.MYSQL_USERNAME,
		password: process.env.MYSQL_PASSWORD,
		port: parseInt(process.env.MYSQL_PORT),
	},
})
  
export async function query(q, values) {
	try {
		const results = await db.query(q, values)
		await db.end()

		return results
	} catch (e) {
		throw Error(e.message)
	}
}