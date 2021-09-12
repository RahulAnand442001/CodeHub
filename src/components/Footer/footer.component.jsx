import React from "react";
import "./footer.styles.css";
import { FaReact } from "react-icons/fa";

const date = new Date().getFullYear();

const Footer = () => {
	return (
		<div className="footer">
			<p className="footer-title">
				Copyright &copy; {date} | Made with <FaReact /> by
				<a href="https://github.com/RahulAnand442001" id="author-link">
					Rahul Anand Sahu.
				</a>
			</p>
		</div>
	);
};

export default Footer;
