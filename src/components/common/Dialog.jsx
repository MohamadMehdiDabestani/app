import styled from "styled-components";
import DialogHighlight from "./DialogHighlight";
import Button from "./Button";
import { Fragment, useContext, useState } from "react";
import Context from "../../context/Context";
const DialogStyle = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;

  .box {
    background: #e3f7ff;
    border-radius: 34px;
    max-width: 540px;
    padding: 32px;
    padding-top: 44px;
    .title-dialog {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 45px;
      color: #216a88;
      text-align: center;
      margin-bottom: 32px;
    }
    button {
      border-radius: 22px;
      width: 100%;
      padding: 20px 0;
      margin-top: 32px;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #e3f7ff;
    }
    .inputs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > div {
        width: 48%;
        p {
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #216a88;
          text-align: center;
          margin-bottom: 8px;
        }
        input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          height: 100%;
          text-align: center;
          font-family: Poppins;
          font-style: normal;
          font-weight: 600;
          font-size: 21px;
          line-height: 31px;
          color: #0e526d;
        }
      }
    }
  }

  @media (max-width: 820px) {
    & > .box {
      button {
        font-size: 11.0667px !important;
      }
      width: 332px;
      padding: 20px;
      & > .inputs p {
        font-size: 9.83704px !important;
      }
    }
  }
`;
const DialogBackgroundStyle = styled.div`
  background: rgba(0, 63, 89, 0.54);
  backdrop-filter: blur(27px);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  top: 0;
  left: 0;
`;
const Dialog = () => {
  const [currency, setCurrency] = useState({
    amount: 0,
    rewards: 0,
  });
  const { showDialog, setShowDialog } = useContext(Context);
  const coinPrice = 30;
  const handleChange = (e) => {
    setCurrency({
      amount: e.target.value,
      rewards: e.target.value / coinPrice,
    });
  };
  return (
    <Fragment>
      {showDialog && (
        <Fragment>
          <DialogBackgroundStyle onClick={() => setShowDialog(false)} />
          <DialogStyle>
            <div className="box">
              <p className="title-dialog">stacking</p>
              <div className="inputs">
                <div>
                  <p>Amount Stake Propel</p>
                  <DialogHighlight
                    className="days"
                    background="rgba(111, 162, 184, 0.21)"
                    borderColor="rgba(19, 82, 107, 0.3)"
                  >
                    <input
                      type="number"
                      value={currency.amount}
                      onChange={handleChange}
                    />
                  </DialogHighlight>
                </div>
                <div>
                  <p>Rewards / Month</p>
                  <DialogHighlight
                    className="days"
                    background="rgba(70, 133, 160, 0.52)"
                    borderColor="rgba(19, 82, 107, 0.3)"
                  >
                    <input type="number" readOnly value={currency.rewards} />
                  </DialogHighlight>
                </div>
              </div>
              <Button>Connect to a wallet</Button>
            </div>
          </DialogStyle>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dialog;
