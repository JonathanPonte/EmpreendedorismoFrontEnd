import styled from "styled-components";
import { Button } from "antd";

export const ButtonDefault = styled(Button)`
  font-weight: bold;
  background: #7ea230;
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 15px;
  margin: ${props => (props.margin ? props.margin : 'auto')};
  float: ${props => (props.float ? props.float : 'none')};

  &:hover {
    background: #7ea230;
    color: #fff;
    border-color: #7ea230;
  }

  &:active {
    background: #7ea230;
    color: #fff;
    border-color: #7ea230;
  }

  &:focus {
    background: #7ea230;
    color: #fff;
    border-color: #7ea230;
  }
`;


export const ButtonHeaderInside = styled(ButtonDefault)`
  background: transparent;
  margin: auto 0;
  display: flex;

  .ant-dropdown-trigger,
  .anticon.anticon-caret-down {
    display: flex;
  }

  .anticon-caret-down {
    margin: auto 10px auto auto;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: #7ea230;

    svg {
      margin: auto;
    }
  }
`;

export const ButtonLogin = styled(ButtonDefault)`
  margin-top: 20px;
  padding-right: 40px;
  padding-left: 40px;
  height: 40px;
  `;

export const ButtonRecoverEmail = styled.button`
  text-decoration: underline;
  background: transparent;
  color: #1890ff;
  border: none;
  margin-top: 2px;
  font-size: 12px;
  
  &:hover {
    color: #000;
  }

`;