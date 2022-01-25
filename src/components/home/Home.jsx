import HomeText from "./HomeText";
import styled from "styled-components";
import HomeItem from "./HomeItem";
import HomeTable from "./HomeTable";
const HomeStyle = styled.div`
  width: 77%;
  display: inline-block;
  float: right;
  padding-right: 28px;
  margin-left: 14px;
`;

const Home = () => {
  return (
    <HomeStyle>
      <HomeText />
      <HomeItem />
      <HomeTable />
    </HomeStyle>
  );
};

export default Home;
