import React from "react";
import styled from "styled-components";

const Buttonn = [
  {
    button: "Пицца",
  },
  {
    button: "Комбо",
  },
  {
    button: "Закуски",
  },
  {
    button: "Десерты",
  },
  {
    button: "Напитки",
  },
  {
    button: "Другие товары",
  },
  {
    button: "Акции",
  },
  {
    button: "Контакты",
  },
  {
    button: "О нас",
  },
  {
    button: "Прямой эфир",
  },
];

const HeaderButton = () => {
  return (
    <StyledDiv>
      <StyledDivScroll>
        {Buttonn.map((element) => (
          <Div>
            <div>
              <Button>{element.button}</Button>
            </div>
          </Div>
        ))}
      </StyledDivScroll>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  position: sticky;
  top: 0px;
  background-color: white;
  width: 414px;
  max-width: fit-content;
  max-height: fit-content;
  padding: 0px;
  margin-bottom: 30px;
  margin-left: -8px;
  @media screen and (max-width: 414px) {
    position: sticky;
    top: 0px;
    background-color: white;
    width: 414px;
    max-width: fit-content;
    max-height: fit-content;
    padding: 0px;
    margin-bottom: 30px;
    margin-left: -8px;
  }
`;
const StyledDivScroll = styled.div`
  overflow-y: scroll;
  overflow-x: scroll;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  max-height: 790px;
  height: 80px;
  @media screen and (max-width: 414px) {
    overflow-y: scroll;
    overflow-x: scroll;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    max-height: 790px;
    height: 80px;
  }
`;
const Div = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
`;
const Button = styled("button")`
  background: #ffffff;
  box-shadow: 0px 0px 10px 6px rgba(190, 190, 190, 0.17);
  border-radius: 6px;
  border: none;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #c3c4c9;
  padding: 10px;
  margin-left: 10px;
  margin-right: 4px;
  width: 100px;
  &:active {
    background: rgba(253, 58, 105, 0.2);
    border-radius: 6px;
    font-family: "SF UI Display";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #fd3a69;
    @media screen and (max-width: 414px) {
      background: #ffffff;
      box-shadow: 0px 0px 10px 6px rgba(190, 190, 190, 0.17);
      border-radius: 6px;
      border: none;
      font-family: "SF UI Display";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      color: #c3c4c9;
      padding: 10px;
      margin-left: 10px;
      margin-right: 4px;
      width: 100px;
      &:active {
        background: rgba(253, 58, 105, 0.2);
        border-radius: 6px;
        font-family: "SF UI Display";
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        color: #fd3a69;
      }
    }
  }
`;

export default HeaderButton;
