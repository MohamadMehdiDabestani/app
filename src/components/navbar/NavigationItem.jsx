import styled from "styled-components";
const NavigationItemStyle = styled.li`
  padding: 12px 50px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  color: #ffffff;
  font-size: 16px;
  line-height: 28px;
  cursor: pointer;
  background: ${props => props.isActive && '#0A5979'};
  & > img {
    margin-right: 16px;
  }
`;

const NavigationItem = (props) => {
  return (
    <NavigationItemStyle isActive={props.isActive}>
      <img src={props.icon.type} alt="" />
      {props.title}
    </NavigationItemStyle>
  );
};

export default NavigationItem;
