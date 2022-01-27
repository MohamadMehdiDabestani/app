import { useContext} from "react";
import styled from "styled-components";
import Context from "../../context/Context";
import Button from "../common/Button";
import Dialog from "../common/Dialog";
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
  const { setShowDialog } = useContext(Context);

  return (
    <HomeTableHeadStyle>
      
      <p>Your Validators</p>
      <Button onClick={() => setShowDialog(true)} big>
        Deposit
      </Button>
    </HomeTableHeadStyle>
  );
};

export default HomeTableHead;
