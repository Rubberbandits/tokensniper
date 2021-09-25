import ReactDOMServer from "react-dom/server";
import DefaultErrorPage from "next/error";
import { db } from "../../lib/database";

export default function logout(req, res) 
{
	res.status(200).send("test")
}