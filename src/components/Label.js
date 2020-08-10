import styled from "styled-components";

export const LabelDefault = styled.label`
    color: #000;
    margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '5px')};
    font-weight: bold;
    text-align: ${props => (props.textAlign ? props.textAlign : 'left')};

`;
