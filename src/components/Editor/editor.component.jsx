import React from "react";
import "./editor.styles.css";
import { Controlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css");

const Editor = (props) => {
	const { language, displayName, onChange, value } = props;

	const handleChange = (editor, data, value) => {
		onChange(value);
	};

	return (
		<div id="editor">
			<div className="editor__title">{displayName}</div>
			<CodeMirror
				onBeforeChange={handleChange}
				value={value}
				className="CodeMirror"
				options={{
					mode: language,
					theme: "yonce",
					lineNumbers: true,
					lineWrapping: true,
					lint: true,
				}}
			/>
		</div>
	);
};

export default Editor;
