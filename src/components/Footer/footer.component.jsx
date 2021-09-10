import React from "react";
import "./footer.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="footer">
			<p className="footer-title">
				Made with <FontAwesomeIcon color="#fff" icon={faReact} /> by Rahul Anand
				Sahu
			</p>
		</div>
	);
};

export default Footer;
