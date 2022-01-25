import styled from "styled-components";
import Button from "../common/Button";
const HomeTableHeadStyle = styled.div`
  display: flex;
  padding: 0 12px;
  align-items: center;
  justify-content: space-between;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    font-family: Poppins;
    margin-left: 22px;
  }
`;

const HomeTableHead = () => {
  return (
    <HomeTableHeadStyle>
      <p>Your Validators</p>
      <Button big>Deposit</Button>
    </HomeTableHeadStyle>
  );
};

export default HomeTableHead;
