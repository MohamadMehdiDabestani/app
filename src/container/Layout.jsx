import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
const LayoutStyle = styled.div`
  display: flex;
  height: 100%;
  overflow-y: auto;
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
