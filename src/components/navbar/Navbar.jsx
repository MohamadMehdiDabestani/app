import Navigation from "./Navigation";
import styled from "styled-components";
import LogoNavbar from "./LogoNavbar";
import Logout from "../../assets/image/Logout.svg";
const NavbarStyle = styled.div`
  background: #216a88;
  width: 290px;
  height: 100%;
  overflow-y: hidden;
  display: inline-block;
  .logout {
    margin-left: 24px;
    display: flex;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    letter-spacing: -0.02em;

    /* Secondary/Grey/600 */

    color: #a3aed0;

    img {
      margin-right: 14px;
    }
  }
`;
const Navbar = () => {
  return (
    <NavbarStyle>
      <LogoNavbar />
      <Navigation />
      <p className="logout">
        <img src={Logout} />
        Log Out
      </p>
    </NavbarStyle>
  );
};

export default Navbar;
