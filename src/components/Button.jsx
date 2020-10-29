
import React from "react";

const Button = (props => {
    return (
        <button type={ props.type }>{ props.label }</button>
    );
});

export default Button;