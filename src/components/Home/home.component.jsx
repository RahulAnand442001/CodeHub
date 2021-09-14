import React, { useState, useRef, useEffect } from "react";
import "./home.styles.css";
import Editor from "../Editor/editor.component";
import Footer from "../Footer/footer.component";
import { FaSave, FaCloudDownloadAlt } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import "codemirror/lib/codemirror.css"
import "codemirror/theme/ayu-dark.css";

// home page
function Home() {
	// maintain code segments in session storage
	const [html, setHtml] = useState("");
	const [css, setCss] = useState("");
	const [js, setJs] = useState("");

	// for downloading files
	const [fileUrl, setFileUrl] = useState("");

	// iframe element ref to view changes
	const iframeInnerHtmlDoc = useRef();

	// load session data if saved
	useEffect(() => {
		let htmlData = sessionStorage.getItem("html");
		let cssData = sessionStorage.getItem("css");
		let jsData = sessionStorage.getItem("js");
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

	// web page
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

	// save code segments and html doc on clicking save
	const saveSession = () => {
		sessionStorage.setItem("html", html);
		sessionStorage.setItem("css", css);
		sessionStorage.setItem("js", js);
		sessionStorage.setItem("web-code", iframeInnerHtmlDoc.current.srcdoc);
	};

	// download html doc on clicking download
	const downloadWebPage = () => {
		let data = sessionStorage.getItem("web-code");
		//console.log(data);
		const blob = new Blob([data], { type: "text/html" });
		const fileDownloadUrl = URL.createObjectURL(blob);
		setFileUrl(fileDownloadUrl);
	};

	const resetCode = () => {
		sessionStorage.clear();
		setHtml("");
		setCss("");
		setJs("");
	};

	// home component
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
				<header className="header">
					<span>CODEHUB</span>
					<div className="cta">
						<button onClick={resetCode} className="cta-save cta-reset">
							<GrPowerReset size="1.2rem" className="reset-icon" />
						</button>
						<button onClick={saveSession} className="cta-save">
							<FaSave size="1.2rem" /> SAVE
						</button>
						<a
							className="cta-download"
							onClick={downloadWebPage}
							download
							href={fileUrl}>
							<FaCloudDownloadAlt size="1.2rem" /> DOWNLOAD
						</a>
					</div>
				</header>
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
