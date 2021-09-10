import React, { useState } from "react";
import "./home.styles.css";
import Editor from "../Editor/editor.component";

function Home() {
	const [html, setHtml] = useState("");
	const [css, setCss] = useState("");
	const [js, setJs] = useState("");

	let srcDoc = `
	<html>
	<body>${html}</body>
	<style>${css}</style>
	<script>${js}</script>
	</html>
	`;

	return (
		<div id="home">
			<div className="panel top-panel">
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
			<h1 className="bottom-panel-title">OUTPUT PANEL</h1>
			<iframe
				srcDoc={srcDoc}
				title="output"
				sandbox="allow-scripts"
				frameBorder="0"
				width="100%"
				height="100%"
			/>
		</div>
	);
}

export default Home;
