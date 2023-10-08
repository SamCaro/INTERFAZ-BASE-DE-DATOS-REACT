import React from "react";

const Input = ({ attribute, handleChange, param }) => {
    return (
        <div>
            <input
                id={attribute.id}
                name={attribute.name}
                type={attribute.type}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
        </div>
    )
};

export default Input;