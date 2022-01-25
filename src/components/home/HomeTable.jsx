import styled from "styled-components";
import EthSmall from "../../assets/image/EthSmall.svg";
import Up from "../../assets/image/up.svg";
import Eye from "../../assets/image/eye.svg";
import HomeTableHead from "./HomeTableHead";
const ItemTableStyle = styled.tr`
  border-bottom: 1px solid #ebeff2;
  img.eth {
    margin-right: 10px;
  }
  td {
    border-bottom: 1px solid #ebeff2;
  }
`;

const HomeTableStyle = styled.div`
  background: #fff;
  box-shadow: 0px 12.6698px 22.5241px rgba(208, 210, 218, 0.15);
  border-radius: 14.0776px;
  padding-top: 23px;
  table {
    width: 100%;
  }
  th {
    background: #fbfbfb;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #292929;
    border-bottom: 1px solid #ebeff2;
  }
  th,
  td {
    text-align: left;
    padding: 16px;
  }
  .staking {
    background: #e6fffb;
    border: 1px solid #87e8de;
    box-sizing: border-box;
    border-radius: 10px;
    color: #13c2c2;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    display: inline-block;
    padding: 0 10px;
  }
`;
const HomeTable = () => {
  return (
    <HomeTableStyle>
      <HomeTableHead />
      <table>
        <tr>
          <th>Amount</th>
          <th>Reward</th>
          <th>Yearly Growth</th>
          <th>Status</th>
          <th>Duration</th>
          <th>Actions</th>
        </tr>
        {Array.from({ length: 5 }).map((_, idx) => (
          <ItemTableStyle key={idx}>
            <td>
              <img className="eth" src={EthSmall} /> 32.00
            </td>
            <td>
              <img className="eth" src={EthSmall} /> 0.00781.000...{" "}
              <img src={Up} alt="" />
            </td>
            <td>17.18%</td>
            <td>
              <span className="staking">STAKING</span>
            </td>
            <td>123 days left on billing balance</td>
            <td>
              <img src={Eye} />
            </td>
          </ItemTableStyle>
        ))}
      </table>
    </HomeTableStyle>
  );
};

export default HomeTable;
