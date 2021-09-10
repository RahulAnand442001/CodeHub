import React from "react";
import "./App.css";
import { isMobile, isTablet } from "react-device-detect";
import Home from "./components/Home/home.component";
import PatchTemplate from "./components/PatchWeb/patch.component";
function App() {
	return (
		<div className="App">
			{!isMobile && !isTablet ? <Home /> : <PatchTemplate />}
		</div>
	);
}

export default App;
