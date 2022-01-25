import styled from "styled-components";
import Button from "../common/Button";
import Arrow from "../../assets/image/DownArrow.svg";
const HeadHomeStyle = styled.div`
  padding-left: 18px;
  padding-top: 45px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  justify-content: space-between;
  & > div > p:first-child {
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 8px;
  }

  & > div > p:last-child {
    font-size: 13px;
    line-height: 15px;
    color: #292929;
  }
`;
const ArrowStyle = styled.img`
  margin-left: 10px;
`;
const HeadHome = () => {
  return (
    <HeadHomeStyle>
      <div>
        <p>Solo</p>
        <p>A staking fee will be deducted monthly from your billing account</p>
      </div>
      <Button>
        Connect Wallet
        <ArrowStyle src={Arrow} />
      </Button>
    </HeadHomeStyle>
  );
};

export default HeadHome;
