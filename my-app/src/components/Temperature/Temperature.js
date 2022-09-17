import React from "react";


const Temperature = ({ children }) => {
    
    return(
        <span>
            <span>{Math.round(children)}</span>
            <span>°</span>
        </span>
    )
};

export default Temperature;
