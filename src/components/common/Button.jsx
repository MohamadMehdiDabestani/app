import styled from "styled-components";
const ButtonStyle = styled.button`
  background: ${(props) => props.background};
  border-radius: 3px;
  padding: 14px ${(props) => (props.big ? "45px" : "20px")};
  color: ${(props) => props.color};
  border: none;
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;
const Button = (props) => {
  return (
    <ButtonStyle
      background={props.background ? props.background : "#216a88"}
      onClick={props.onClick && props.onClick}
      big={props.big}
      color={props.color ? props.color : "#fff"}
    >
      {props.children}
    </ButtonStyle>
  );
};

export default Button;
