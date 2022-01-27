import HomeText from "./HomeText";
import styled from "styled-components";
import HomeItem from "./HomeItem";
import HomeTable from "./HomeTable";
import { useContext } from "react";
import Context from "../../context/Context";
const HomeStyle = styled.div`
  width: 80%;
  margin-left: 20%;
  display: inline-block;
  float: right;
  padding: 0 14px;
  position: relative;
  overflow-y: ${(props) => (props.showDialog ? "hidden" : "unset")};
  @media (max-width: 960px) {
    width: 100%;
    padding-right: 0;
    margin-left: 0%;
    padding-left: 0;
  }
`;

const Home = () => {
  const { showDialog } = useContext(Context);
  return (
    <HomeStyle showDialog={showDialog}>
      <HomeText />
      <HomeItem />
      <HomeTable />
    </HomeStyle>
  );
};

export default Home;
