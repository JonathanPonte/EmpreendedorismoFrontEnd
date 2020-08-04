import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  margin: ${props => (props.margin ? props.margin : 'auto')};
  text-align: center;
  width: 80%
`;

export const ContainerHeader = styled.div`
height: 100%;
width: 100%;
padding: 30px;
`;

export const ContainerScale = styled.div`
 margin: ${props => (props.margin ? props.margin : 'auto')};
 width: fit-content;
 display: inline-block;

 img {
  height: 180px;
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


export const DivInputFileDefault = styled.div`
  display: flex;
  height: 32px;
  width: 200px;
  border: 1px solid #000;
  border-radius: 20px;
  background: #fff;
  box-shadow: none;

  input[type="file"] {
    display: none;
  }

  label {
    max-width: 100%;
    width: 100%;
    padding: 4px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    display: flex;
    height: 100%;
    width: 40px;
    border: 1px solid #000;
    border-radius: 20px;
    background-color: #020746;
    margin: auto 5px auto -1px;
  }

  svg {
    font-size: 18px;
    color: #fff;
    margin: auto;
  }

  &:active: {
    border-color: #bdb8d8;
  }

  &:hover {
    border-color: #bdb8d8;

    span {
      border-color: #bdb8d8;
    }
  }

  &:focus {
    border-color: #bdb8d8;
    box-shadow: 0px 0px 6px #47337f;
  }
`;


export const DivButtonDeleteFile = styled.div`
  display: flex;

  .deleteButton {
    display: flex;
    margin-left: 10px;

    svg {
      font-size: 18px;
      color: #020746;
      margin: auto;
    }

    svg:hover {
      color: #000;
    }
  }
`;
