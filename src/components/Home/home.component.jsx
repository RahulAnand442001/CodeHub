import React, { useState, useRef, useEffect } from "react";
import "./home.styles.css";
import Editor from "../Editor/editor.component";
import Footer from "../Footer/footer.component";

function Home() {
	const [html, setHtml] = useState("");
	const [css, setCss] = useState("");
	const [js, setJs] = useState("");

	useEffect(() => {
		let htmlData = localStorage.getItem("html");
		let cssData = localStorage.getItem("css");
		let jsData = localStorage.getItem("js");
		if (htmlData) {
			setHtml(htmlData);
		}
		if (cssData) {
			setCss(cssData);
		}
		if (jsData) {
			setJs(jsData);
		}
	}, []);

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

	const iframeInnerHtmlDoc = useRef();

	const handleClick = () => {
		console.log(iframeInnerHtmlDoc.current.srcdoc);
		//localStorage.setItem("htmlCode", iframeInnerHtmlDoc.current.srcdoc);
		localStorage.setItem("html", html);
		localStorage.setItem("css", css);
		localStorage.setItem("js", js);
	};

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
				<div className="right-panel-title">
					<span>CODEHUB</span>
					<div className="cta">
						<button onClick={handleClick} className="cta-save">
							SAVE
						</button>
						<button className="cta-download">DOWNLOAD</button>
					</div>
				</div>
				<iframe
					ref={iframeInnerHtmlDoc}
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
