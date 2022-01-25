import styled from "styled-components";
const ButtonStyle = styled.button`
  background: #216a88;
  border-radius: 3px;
  padding: 14px ${(props) => (props.big ? "45px" : "20px")};
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
const Button = (props) => {
  return <ButtonStyle big={props.big}>{props.children}</ButtonStyle>;
};

export default Button;
