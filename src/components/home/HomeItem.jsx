import style from "styled-components";
import Banck from "../../assets/image/Banck.svg";
import Medal from "../../assets/image/Medal.svg";
import Racket from "../../assets/image/Racket.svg";
import HomeItemChildren from "./HomeItemChildren";
const HomeItemStyle = style.div`
    display:flex;
    margin-bottom: 13px
`;
const items = [
  {
    number: "269.9122",
    title: "Staking",
    secondNumber: "$48,966.40",
    footerText: "Your stake",
    icon: <img src={Banck} />,
    eth: true,
    backgroundColorIcon: "#FD4A55",
  },
  {
    number: "269.9122",
    title: "Rewards",
    secondNumber: "$48,966.40",
    footerText: "Your rewards",
    icon: <img src={Medal} />,
    eth: true,
    backgroundColorIcon: "#FBB44A",
  },
  {
    number: "15.21%",
    title: "Yearly Growth",
    footerText: "Based on the Past 30 days",
    icon: <img src={Racket} />,
    eth: false,
    backgroundColorIcon: "#0471FB",
  },
];
const HomeItem = () => {
  return (
    <HomeItemStyle>
      {items.map((el, idx) => (
        <HomeItemChildren {...el} key={idx} />
      ))}
    </HomeItemStyle>
  );
};

export default HomeItem;
