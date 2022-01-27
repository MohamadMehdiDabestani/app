import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
import MobileNavbar from "../components/navbar/MobileNavbar";
import Context from "../context/Context";
import { useContext } from "react";

const LayoutStyle = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 960px) {
    padding: 0 3%;
  }

`;
const Layout = () => {
  return (
    <LayoutStyle>
      <Navbar />
      <Home />
    </LayoutStyle>
  );
};

export default Layout;
