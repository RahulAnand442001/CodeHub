import React from "react";
import "./footer.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="footer">
			<p className="footer-title">
				Made with <FontAwesomeIcon color="#fff" icon={faReact} /> by
				<a href="https://github.com/RahulAnand442001" id="author-link">Rahul Anand Sahu</a>
			</p>
		</div>
	);
};

export default Footer;
