import React from "react";
import Button from "../Button/Button";
import "./hero.css";

function Hero(props) {
	return (
		<header className="hero">
			<div>
				<h1>Karim Alaa</h1>
				<h3>Web Developer & Designer</h3>
				<Button styleClass="dark" label="contact me"></Button>
			</div>
		</header>
	);
}

export default Hero;
