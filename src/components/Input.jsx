import React from "react";

const Input = (props) => {
	return (
		<input
			name={props.name}
			type={props.type}
			required={props.required}
			maxLength={props.maxLength}
			onChange={props.onChange}
		/>
	);
};

export default Input;
