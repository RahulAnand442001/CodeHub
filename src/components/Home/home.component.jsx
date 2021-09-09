import React from "react";
import Editor from "../Editor/editor.component";
function Home() {
	return (
		<section id="home">
			<div className="panel top-panel">
				<Editor count="1" />
				<Editor count="2" />
				<Editor count="3" />
			</div>
			<div className="panel bottom-panel"></div>
		</section>
	);
}

export default Home;
