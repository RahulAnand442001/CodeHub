import React from "react";
import "./editor.styles.css";

// code mirror playground
import { Controlled as CodeMirror } from "react-codemirror2";

// code mirror language features
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css");

// code mirror properties
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/javascript-hint");
require("codemirror/addon/hint/show-hint.css");
require("codemirror/addon/hint/anyword-hint");
require("codemirror/addon/edit/closebrackets");
require("codemirror/addon/edit/closetag");
require("codemirror/addon/fold/foldcode");
require("codemirror/addon/fold/foldgutter");
require("codemirror/addon/fold/brace-fold");
require("codemirror/addon/fold/comment-fold");
require("codemirror/addon/fold/foldgutter.css");

const Editor = (props) => {
	const { language, displayName, onChange, value } = props;

	const handleChange = (editor, data, value) => {
		onChange(value);
	};

	return (
		<div id="editor">
			<div className="editor-title">{displayName}</div>
			<CodeMirror
				onBeforeChange={handleChange}
				value={value}
				className="CodeMirror"
				options={{
					mode: language,
					theme: "material-ocean",
					lineNumbers: true,
					lineWrapping: true,
					lint: true,
					smartIndent: true,
					foldGutter: true,
					gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
					autoCloseTags: true,
					matchBrackets: true,
					autoCloseBrackets: true,
					extraKeys: {
						"Ctrl-Space": "autocomplete",
					},
				}}
			/>
		</div>
	);
};

export default Editor;
