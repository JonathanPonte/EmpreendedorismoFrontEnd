import styled from "styled-components";
import { Card } from "antd";

/*  CARDS DEFAULT */

export const CardDefault = styled(Card)`
box-shadow: 0px 2px 7px 0px #484747;
border: none;
border-radius: 20px;
padding: 0;
`;

/*  CARDS DEFAULT */

export const CardLogin = styled(CardDefault)`
  background: #bdb8d8;
  width: 320px;
  margin: auto;
  border: none;

  img {
    height: 43px;
    margin: 35px;
  }
`;

export const CardScale = styled(CardDefault)`
  padding: 0;

  img {
    height: 200px;
    border-radius: 20px;
  }
`;

