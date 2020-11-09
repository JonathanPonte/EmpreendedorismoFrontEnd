import styled from "styled-components";

export const LabelDefault = styled.label`
    color: #000;
    margin: ${props => (props.margin ? props.margin : 'none')};
    font-weight: bold;
    text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
`;

export const LabelQuestion = styled(LabelDefault)`
    font-size: 30px;
`;