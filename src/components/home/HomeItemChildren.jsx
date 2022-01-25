import styled from "styled-components";
import EthIcon from "../../assets/image/EthIcon.svg";
const HomeItemStyle = styled.div`
  width: 80%;
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
  background: #ffffff;
  border-radius: 14px;
  & > div:not(& > .line) {
    padding: 11px 28px;
  }
  & > div > .flex {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > p.number {
      color: #15192c;
      font-weight: bold;
      font-size: 36px;
      text-align: right;
    }
    & > p.number > img {
      margin-right: 12px;
    }
    & > p.number > span {
      color: #ff6a00;
      overflow-y: hidden;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      display: block;
      font-family: "Open Sans";
    }
    & > .icon {
      border-radius: 11.2621px;
      width: 44.34px;
      height: 44.34px;
      display: inline-flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      background-color: ${(props) => props.backgroundColorIcon};
    }
  }
  & > .line {
    width: 100%;
    height: 0.7px;
    background: #ececee;
    margin-bottom: 10px;
  }
  & > div > p:first-child {
    color: #92959e;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: right;
  }

  & > p:last-child {
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    color: #92959e;
    margin: 11px 22px;
  }
`;
const HomeItemChildren = (props) => {
  return (
    <HomeItemStyle backgroundColorIcon={props.backgroundColorIcon}>
      <div>
        <p>{props.title}</p>
        <div className="flex">
          <div className="icon">{props.icon}</div>
          <p className="number">
            {props.eth && <img src={EthIcon} />}
            {props.number}
            <span>{props.secondNumber}</span>
          </p>
        </div>
      </div>
      <div className="line"></div>
      <p>{props.footerText}</p>
    </HomeItemStyle>
  );
};

export default HomeItemChildren;
