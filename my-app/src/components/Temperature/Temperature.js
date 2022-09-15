import React from "react";
import styled from "styled-components";

const Temperature = ({ children }) => {
    
    return(
        <span>
            <span>{children}</span>
            <span>°</span>
        </span>
    )
};

export default Temperature;
