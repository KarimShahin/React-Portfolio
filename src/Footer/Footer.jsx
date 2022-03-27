import { faAddressBook, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Button from "../Button/Button";
import "./Footer.css";

function Footer(props) {
	return (
		<div className="footer">
			<div className="details">
				<h4>get in touch</h4>
				<p>
					<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
					<span>karim.alaa.shahin@gmail.com</span>
				</p>
				<p>
					<FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
					<span>01008299620</span>
				</p>
				<p>
					<FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
					<span>01112113511</span>
				</p>
			</div>
			<Button styleClass="dark" label="contact me"></Button>
			<div className="social">
				<div className="social-icons">
					<FontAwesomeIcon size="lg" icon={faFacebook}></FontAwesomeIcon>
					<FontAwesomeIcon size="lg" icon={faTwitter}></FontAwesomeIcon>
					<FontAwesomeIcon size="lg" icon={faLinkedin}></FontAwesomeIcon>
				</div>
				<p>Copyright &copy; 2022 KS</p>
			</div>
		</div>
	);
}

export default Footer;
