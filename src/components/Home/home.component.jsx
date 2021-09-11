import React, { useState } from "react";
import "./home.styles.css";
import Editor from "../Editor/editor.component";
import Footer from "../Footer/footer.component";

function Home() {
	const [html, setHtml] = useState("");
	const [css, setCss] = useState("");
	const [js, setJs] = useState("");

	let srcDoc = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Website</title>
		<style>${css}</style>
		<script>${js}</script>
	</head>
	<body>${html}</body>
	</html>`;

	return (
		<div id="home">
			<div className="panel left-panel">
				<Editor
					language="xml"
					displayName="HTML"
					onChange={setHtml}
					value={html}
				/>
				<Editor
					language="css"
					displayName="CSS"
					onChange={setCss}
					value={css}
				/>
				<Editor
					language="javascript"
					displayName="JS"
					onChange={setJs}
					value={js}
				/>
			</div>
			<div className="panel right-panel">
				<h1 className="right-panel-title">CODEHUB</h1>
				<iframe
					srcDoc={srcDoc}
					title="output"
					sandbox="allow-scripts"
					frameBorder="0"
					width="100%"
					height="100%"
				/>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
