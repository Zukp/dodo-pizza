import React from "react";
import { useDispatch } from "react-redux";
import { Action } from "../../components/store/basketReducer";
import styled from "styled-components";
import img from "../../components/header/img/B.png";

const menu = [
  {
    id: 1,
    images: img,
    name: "Ветчина и грибы ",
    description:
      "Ветчина,шампиньоны, увеличинная порция моцареллы, томатный соус",
    price: 345,
    card: 1,
  },
  {
    id: 2,
    images: img,
    name: "Баварские колбаски ",
    description:
      "Баварские колбаски, ветчина,пикантная пепперони, острая чоризо,томатный соус",
    price: 345,
    card: 1,
  },
  {
    id: 3,
    images: img,
    name: "Нежный лосось ",
    description: "Лосось, томаты, оливки,соус песто,помидорки черри",
    price: 345,
    card: 1,
  },
  {
    id: 4,
    images: img,
    name: "Нежный лосось ",
    description: "Лосось, томаты, оливки,соус песто,помидорки черри",
    price: 345,
    card: 1,
  },
  {
    id: 5,
    images: img,
    name: "Нежный лосось ",
    description: "Лосось, томаты, оливки,соус песто,помидорки черри",
    price: 345,
    card: 1,
  },
  {
    id: 6,
    images: img,
    name: "Нежный лосось ",
    description: "Лосось, томаты, оливки,соус песто,помидорки черри",
    price: 345,
    card: 1,
  },
  {
    id: 7,
    images: img,
    name: "Нежный лосось ",
    description: "Лосось, томаты, оливки,соус песто,помидорки черри",
    price: 345,
    card: 1,
  },
];
const DodoMenu = () => {
  const dispatch = useDispatch();

  const handleChange = (item) => {
    dispatch(Action.addItem(item));
  };
  return (
    <ContainerDiv>
      {menu.map((element) => (
        <Div>
          <div>
            <Img src={element.images} alt="" />
          </div>
          <div>
            <H2>{element.name}</H2>
            <P>{element.description}</P>
            <Button onClick={() => handleChange(element)}>
              от {element.price} р
            </Button>
          </div>
        </Div>
      ))}
    </ContainerDiv>
  );
};
const ContainerDiv = styled("div")`
  margin-bottom: 100px;
`;
const Div = styled("div")`
  width: 360px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f3f5f9;
  border-bottom: 1px solid #f3f5f9;
  padding: 10px;
  @media screen and (max-width: 414px) {
    width: 360px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #f3f5f9;
    border-bottom: 1px solid #f3f5f9;
    padding: 10px;
  }
`;
const Img = styled("img")`
  margin-right: 22px;

  @media screen and (max-width: 414px) {
    margin-right: 22px;
  }
`;
const H2 = styled("h2")`
  @media screen and (max-width: 414px) {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #222831;
  }
`;
const P = styled("p")`
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #aaaaad;
  @media screen and (max-width: 414px) {
    font-family: "SF UI Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #aaaaad;
  }
`;
const Button = styled("button")`
  border: 1px solid #fd3a69;
  border-radius: 6px;
  background: white;
  margin-left: 61.39%;
  @media screen and (max-width: 414px) {
    border: 1px solid #fd3a69;
    border-radius: 6px;
    background: white;
    margin-left: 61.39%;
  }
`;

export default DodoMenu;
