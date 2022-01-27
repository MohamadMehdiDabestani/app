import styled from "styled-components";
const DialogHighlightStyle = styled.div`
  background: ${props => props.background};
  border: 2px solid ${props => props.borderColor};
  box-sizing: border-box;
  border-radius: 16px;
  text-align: center;
  padding: 14px 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 31px;
`;
const DialogHighlight = (props) => {
  return (
    <DialogHighlightStyle
      background={props.background}
      borderColor={props.borderColor}
      className={props.className && props.className}
    >
      {props.children}
    </DialogHighlightStyle>
  );
};

export default DialogHighlight;
