import styled from "styled-components";
import Logo from "../../assets/image/Logo.svg";
const LogoNavbarStyle = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 63%;
  padding: 10px;
  margin: 33px auto;
  display: flex;
  align-items: center;
  color: #216A88;
  & > img {
    margin-right: 15px;
  }
`;
const LogoNavbar = () => {
  return (
    <LogoNavbarStyle>
      <img src={Logo} alt="" />
      NovinPix
    </LogoNavbarStyle>
  );
};

export default LogoNavbar;
