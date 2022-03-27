import React from "react";
import Button from "../Button/Button";
import "./Aboutme.css";

function Aboutme(props) {
	return (
		<div className="about-me">
			<h2>About me</h2>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis eligendi consequuntur qui ducimus,
					magnam molestias at reprehenderit! Excepturi quasi molestiae perspiciatis dicta exercitationem quo
					similique velit quia impedit animi voluptatum provident vitae magni rem facilis repudiandae
					molestias voluptate autem debitis non, sunt quam reprehenderit inventore? Deserunt consequatur rem
					quos nihil iusto ea maiores, minus ab temporibus blanditiis suscipit maxime, unde perspiciatis eos
					impedit omnis corrupti repudiandae doloribus sapiente ut id illum optio! Ab, soluta sint.
					Perferendis maxime vero corporis! Voluptatem vero, veniam animi cumque voluptatum velit debitis.
					Aliquid odit rerum esse itaque qui. Modi optio dignissimos illo accusantium vel doloribus,
					voluptates nostrum quas? Ex earum, eligendi est at eos porro veritatis velit vero nulla deserunt
					harum facere blanditiis laudantium beatae perspiciatis rerum excepturi magnam quibusdam doloremque?
				</p>
				<Button
					styleClass="light"
					link="Karim-Shahin-frontend-developer.pdf"
					fileName="CV"
					label="download Resume"
				></Button>
			</div>
		</div>
	);
}

export default Aboutme;
