import React from "react";
import "./Button.css";

function Button(props) {
	return (
		<a href={props.link} download={props.fileName} className={props.styleClass}>
			{props.label}
		</a>
	);
}

export default Button;
