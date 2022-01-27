import { Fragment, useContext, useState } from "react";
import Navigation from "./Navigation";
import styled from "styled-components";
import LogoNavbar from "./LogoNavbar";
import Logout from "../../assets/image/Logout.svg";
import CloseIcon from "../../assets/image/CloseIcon.svg";
import Context from "../../context/Context";
import Arrow from "../../assets/image/ArrowBlue.svg";

import Button from "../common/Button";
const NavbarStyle = styled.div`
  background: #216a88;
  width: 20%;
  height: 100%;
  position: fixed;
  overflow-y: hidden;
  display: inline-block;
  z-index: 3;
  .logout {
    margin-left: 24px;
    display: flex;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #a3aed0;
    img {
      margin-right: 14px;
    }
  }
  button {
    margin: 30px auto;
    width: 70%;
    display: none;
  }

  @media (max-width: 960px) {
    width: 30%;
    position: absolute;
    top: 0;
    left: ${(props) => (props.open ? "0" : "-300px")};
    transition: left 0.2s ease;
    z-index: 6;
    span {
      display: block !important;
    }
    & > div:first-child {
      display: none;
    }
    button {
      margin: 30px auto;
      width: auto;
      align-items: center;
      display: flex;
      img {
        margin-left: 10px;
      }
    }
  }
  @media (max-width: 665px) {
    width: 40% !important;
  }
  @media (max-width: 440px) {
    width: 47% !important;
  }
  @media (max-width: 375px) {
    width: 60% !important;
  }
  span {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    padding: 15px 20px;
    background: #216a88;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
const AlphaStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #0000005c;
  z-index: 5;
  cursor: pointer;
  img {
    position: fixed;
    top: 14px;
    right: 14px;
  }
`;
const Navbar = () => {
  const { setShowMenu, showMenu } = useContext(Context);
  return (
    <Fragment>
      {showMenu && (
        <AlphaStyle onClick={() => setShowMenu(false)}>
          <img src={CloseIcon} alt="" />
        </AlphaStyle>
      )}
      <NavbarStyle open={showMenu}>
        <LogoNavbar />
        <Button color="#216A88" background="#fff">
          Connect Wallet
          <img src={Arrow} alt="" />
        </Button>
        <Navigation />
        <p className="logout">
          <img src={Logout} />
          Log Out
        </p>
      </NavbarStyle>
    </Fragment>
  );
};

export default Navbar;
