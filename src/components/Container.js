import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  margin: ${props => (props.margin ? props.margin : 'auto')};
  text-align: center;
  display: flex;
  width: 80%
`;

export const ContainerHeaderSearch = styled.div`
height: 40%;
width: 100%;
padding: 30px;
`;

export const ContainerScale = styled.div`
 margin: ${props => (props.margin ? props.margin : 'auto')};
 width: fit-content;
 display: inline-block;

 img {
  height: 200px;
  border-radius: 20px 20px 0 0;
  box-shadow: 1px 2px 10px 1px #484747;
 }

 h3 {
  width: 100%;
  background: rgba(0,0,0,0.5);
  color: white;
  font-size: 20px;
  text-align: center;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 1px 2px 10px 1px #484747;
}

`;
