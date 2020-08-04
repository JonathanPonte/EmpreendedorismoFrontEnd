import styled from "styled-components";
import Form from 'antd/lib/form/Form';


export const FormDefault = styled(Form)`
 height: 100%;
 width: 50%;
 margin: auto;

 h1 {
    font-weight: bold;
    font-size: 30px;
  }
`;


export const FormInformationScale = styled(Form)`
 height: 100%;
 width: 80%;
 margin: auto;
 

 h1 {
    font-weight: bold;
    font-size: 30px;
    width: fit-content;
    display: inline;
    float: left;
  }
`;
