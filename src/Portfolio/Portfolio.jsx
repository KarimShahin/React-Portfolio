import React from "react";
import Card from "react-bootstrap/Card";
import "./Portfolio.css";

function Portfolio(props) {
	return (
		<div className="portfolio">
			<h2>Portfolio</h2>
			<div className="card-container">
				<Card body>web design</Card>
				<Card body>mobile design</Card>
				<Card body>logo design</Card>
				<Card body>web application development</Card>
				<Card body>mobile application development</Card>
				<Card body>pwa development</Card>
			</div>
		</div>
	);
}

export default Portfolio;
