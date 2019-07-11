import React from 'react';
import styled from "@emotion/styled";


const NameLabel = ({label,bold})=>{
    const Label = styled.label`
        font-weight:${bold}
    `
    return(
        <>
            <Label>{label}</Label>
        </>
    );
}

export default NameLabel;