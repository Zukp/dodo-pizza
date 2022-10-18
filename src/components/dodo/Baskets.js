import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import img from "../../components/header/img/B.png";

const Baskets = () => {
  const { items } = useSelector((state) => state.card);

  return (
    <ContainerDiv>
      {items.map((element) => (
        <Div>
          <div>
            <Img src={element.images} alt="" />
            <Paragraf>{element.price}р</Paragraf>
          </div>
          <div>
            <H2>{element.name}</H2>
            <P>{element.description}</P>
            <PP>{element.card} товар</PP>
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
  width: 50px;
  height: 50px;
  @media screen and (max-width: 414px) {
    margin-right: 22px;
    width: 50px;
    height: 50px;
  }
`;
const H2 = styled("h2")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #222831;
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
const Paragraf = styled("p")`
  border-radius: 6px;
  background: white;
  width: 40px;
  @media screen and (max-width: 414px) {
    border-radius: 6px;
    background: white;
    width: 40px;
  }
`;
const PP = styled("p")`
  background: #f0f0f0;
  width: 58px;
  padding: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #222831;
  text-align: center;
  @media screen and (max-width: 414px) {
    background: #f0f0f0;
    width: 58px;
    padding: 5px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #222831;
    text-align: center;
  }
`;

export default Baskets;
