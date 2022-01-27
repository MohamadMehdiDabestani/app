import styled from "styled-components";
import LogoNavbar from "./LogoNavbar";
import Image from "../../assets/image/IconSmallNavbar.svg";
import Context from "../../context/Context";
import { useContext } from "react";
const MobileNavbarStyle = styled.div`
  background: #ffffff;
  display: none;
  padding: 14px;
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div {
    padding: 0;
    margin: 0;
    width: auto;
    padding: 10px;
  }
  img {
    cursor: pointer;
  }
`;
const MobileNavbar = () => {
  const { setShowMenu } = useContext(Context);
  return (
    <MobileNavbarStyle>
      <LogoNavbar isDark />
      <img src={Image} onClick={() => setShowMenu(true)}/>
    </MobileNavbarStyle>
  );
};

export default MobileNavbar;
