import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./Skills.css";

function Skills(props) {
	return (
		<div className="skills">
			<h2>Skills</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ex, dicta voluptates soluta vel, voluptas
				ducimus architecto, dolor maxime quibusdam ab hic rerum quaerat fugit sequi molestiae dolorem
				reprehenderit numquam aperiam laudantium accusamus nemo perferendis cum minima! Nisi illum culpa
				deserunt? Sed vel quia pariatur inventore necessitatibus placeat, cupiditate maiores.
			</p>
			<div>
				<div>
					<h4>MY FOCUS</h4>
					<h5>UI/UX Design</h5>
					<h5>Responsive Design</h5>
					<h5>Web Design</h5>
					<h5>Mobile App Design</h5>
				</div>
				<div>
					<div>
						<span>HTML</span>
						<ProgressBar label="HTML" now={80}></ProgressBar>
					</div>
					<div>
						<span>CSS</span>
						<ProgressBar label="CSS" now={70}></ProgressBar>
					</div>
					<div>
						<span>JavaScript</span>
						<ProgressBar label="JavaScript" now={85}></ProgressBar>
					</div>
					<div>
						<span>React</span>
						<ProgressBar label="React" now={90}></ProgressBar>
					</div>
					<div>
						<span>Photoshop</span>
						<ProgressBar label="Photoshop" now={75}></ProgressBar>
					</div>
					<div>
						<span>AdobeXD</span>
						<ProgressBar label="AdobeXD" now={95}></ProgressBar>
					</div>
					<div>
						<span>Node.js</span>
						<ProgressBar label="Node.js" now={80}></ProgressBar>
					</div>
					<div>
						<span>WordPress</span>
						<ProgressBar label="WordPress" now={85}></ProgressBar>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
