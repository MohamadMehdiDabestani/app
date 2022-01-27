import styled from "styled-components";
import Logo from "../../assets/image/Logo.svg";
import LogoWhite from "../../assets/image/LogoWhite.svg";
const LogoNavbarStyle = styled.div`
  background: ${(props) => (props.dark ? "#216A88" : "#ffffff")};
  border-radius: 5px;
  width: 63%;
  padding: 10px;
  margin: 33px auto;
  display: flex;
  align-items: center;
  color: ${(props) => (props.dark ? "#ffffff" : "#216A88")};
  & > img {
    margin-right: 15px;
  }
`;
const LogoNavbar = (props) => {
  return (
    <LogoNavbarStyle dark={props.isDark}>
      <img src={props.isDark ? LogoWhite : Logo} alt="" />
      NovinPix
    </LogoNavbarStyle>
  );
};

export default LogoNavbar;
