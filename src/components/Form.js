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

  h2 {
    font-weight: bold;
  }
`;

export const FormDefaultInformations = styled(Form)`
 height: 100%;
 width: 70%;
 margin: auto;

 h1 {
    font-weight: bold;
    font-size: 30px;
  }

  h2 {
    font-weight: bold;
  }
`;

export const FormInformationScale = styled(Form)`
 min-width: 700px;
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
