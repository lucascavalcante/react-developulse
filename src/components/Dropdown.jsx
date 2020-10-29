import React from "react";

const Dropdown = (props) => {
	return (
		<select
			name={props.name}
			onChange={props.onChange}
			required={props.required}
		>
			<option key="" value="">
				{props.defaultOption}
			</option>
			{props.options &&
				props.options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
		</select>
	);
};

export default Dropdown;
