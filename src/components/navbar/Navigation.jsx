import styled from "styled-components";
import Pool from "../../assets/image/PoolIcon.svg";
import Solo from "../../assets/image/SoloIcon.svg";
import Docs from "../../assets/image/DocsIcon.svg";
import NavigationItem from "./NavigationItem";
const NavigationStyle = styled.ul`
  height: 78%;
`;
const items = [
  {
    title: "pool",
    Icon: <Pool />,
  },
  {
    title: "solo",
    isActive: true,
    Icon: <Solo />,
  },
  {
    title: "docs",
    Icon: <Docs />,
  },
];
const Navigation = () => {
  return (
    <NavigationStyle>
      {items.map((el, idx) => (
        <NavigationItem
          title={el.title}
          isActive={el.isActive}
          icon={el.Icon}
          key={idx}
        />
      ))}
    </NavigationStyle>
  );
};

export default Navigation;
