import styled from "styled-components";
import { Link } from "react-router-dom";
import { Field } from "formik";

export const Container = styled.div`
  height: 100vh;
  align-items: center;
`;

export const BarTitle = styled.div`
  background: radial-gradient(
      50% 2306.87% at 50% 49.06%,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.07) 100%
    ),
    #eb2228;
  height: 43px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BottomBar = styled.div`
  height: 7px;
  background: #7fc144;
`;

export const Title = styled.strong`
  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  padding: 21px 0;
  letter-spacing: 1px;
  place-content: center;
  display: flex;
`;

export const EmptyCart = styled(Link)`
  font-size: 30px;
  color: red;
  align-self: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 30px;
  text-decoration: none;
`;

export const ItemContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  + ul {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const AreaItem = styled.li`
  flex-direction: row;
  margin-top: 1px;
  margin-left: 5px;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  display: flex;
  padding-left: 10px;
`;

export const ImgArea = styled.div`
  height: 65px;
  width: 70px;
  border-radius: 5px;
`;

export const ImgItem = styled.img`
  height: 65px;
  width: 70px;
  border-radius: 5px;
`;

export const AreaInfo = styled.div`
  max-width: 70%;
  margin-left: 13px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  display: flex;
`;

export const ItemDescription = styled.strong`
  color: rgba(0, 0, 0);
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const AmountArea = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Amount = styled.input`
  width: 40px;
  display: flex;
  padding: 5px;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PriceArea = styled.div`
  flex-direction: row;
  position: absolute;
  right: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
`;

export const ItemPrice = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: normal;
  line-height: 17px;
  margin-top: 1px;
  letter-spacing: 0.5px;
  display: flex;
`;

export const TotalArea = styled.div`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  display: flex;
  position: relative;
  height: 22px;
  border-top: 1px solid rgba(237, 34, 40, 0.6);
  padding-top: 12px;
  margin-left: 14px;
  margin-right: 14px;
`;

export const TotalText = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1px;
  place-content: center;
  position: absolute;
  left: 15px;
  margin-left: -10px;
`;

export const TotalPrice = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1px;
  place-content: center;
  position: absolute;
  right: 13px;
  margin-right: -10px;
`;

export const Options = styled.input`
  height: 30px;
  display: flex;
  align-self: stretch;
  color: #666;
  font-style: normal;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: 10px;
  margin: 28px 15px 0;
  padding: 5px 10px;
  ::placeholder {
    color: #ccc;
  }
`;

export const Desability = styled(Link)`
  font-size: 25px;
  color: red;
  align-self: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 20px;
  text-decoration: none;
`;

export const SubmitButton = styled.button`
  height: 30px;
  width: 230px;
  align-items: center;
  justify-content: center;
  display: flex;
  align-self: center;
  color: #fff;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  background-color: #7fc144;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const DecisionButton = styled.button`
  height: 40px;
  width: 230px;
  align-self: center;
  color: #fff;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  background-color: #7fc144;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: 4px;
  & + button {
    margin-top: 20px;
  }
`;

export const FormArea = styled.div`
  display: flex;
  background: white;
  padding: 1.5rem;
  border-radius: 5px;
  flex-direction: column;
  width: 80vw;
  .RadioArea {
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .RadioInputArea {
      flex-direction: row;
      margin-right: 17px;
      display: flex;
      align-items: center;
    }
  }
  .ConfirmArea {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-bottom: -10px;
    button {
      display: flex;
    }
  }
  @media (max-width: 362px) {
    width: 95%;
    display: flex;
    .RadioArea {
      flex-direction: column;
      display: flex;
      margin-bottom: 15px;
      align-self: flex-start;
      justify-content: center;
      place-content: center;
      flex: 1;
      .RadioInputArea {
        flex-direction: row;
        justify-content: center;
        place-content: center;
        display: flex;
        flex: 1;
        margin-left: 0;
      }
    }
    .ConfirmArea {
      flex-direction: column;
      display: flex;
      flex: 1;
      .btn {
        display: flex;
        align-self: center;
        justify-content: center;
        flex: 1;
        padding: 5px 30px;
        width: 100%;
        & + button {
          margin-top: 15px;
        }
      }
    }
  }
`;

export const TextAlert = styled.strong`
  font-size: 12px;
  margin-top: -15px;
  margin-bottom: 15px;
  padding-left: 5px;
  color: red;
`;

export const OptionsConfirm = styled(Field)`
  height: 30px;
  display: flex;
  align-self: stretch;
  color: #666;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: 10px;
  margin-bottom: 21px;
  padding: 5px 10px;
  ::placeholder {
    color: #ccc;
  }
`;
