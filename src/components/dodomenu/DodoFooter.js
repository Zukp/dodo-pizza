import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import burgerImg from "../../components/header/img/Group.png";
import profileImg from "../../components/header/img/Union.png";
import korizinaImg from "../../components/header/img/Vector.png";
const DodoFooter = () => {
  const history = useNavigate();

  const pushChange = () => {
    history("/dodo-pizza");
  };
  const pushChange2 = () => {
    history("/profile");
  };
  const pushChange3 = () => {
    history("/baskets");
  };

  return (
    <ContainerDiv>
      <Div>
        <div>
          <img onClick={pushChange} src={burgerImg} alt="burger-Photo" />
        </div>
        <div>
          <img onClick={pushChange2} src={profileImg} alt="profileImg" />
        </div>
        <div>
          <img onClick={pushChange3} src={korizinaImg} alt="" />
        </div>
      </Div>
    </ContainerDiv>
  );
};
const ContainerDiv = styled("div")`
  position: fixed;
  bottom: 0px;
  @media screen and (max-width: 414px) {
    position: fixed;
    bottom: 0px;
  }
`;
const Div = styled("div")`
  display: flex;
  width: 414px;
  height: 56px;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  background: #f0f0f0;
  margin-left: -8px;
  @media screen and (max-width: 414px) {
    display: flex;
    width: 414px;
    height: 56px;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    background: #f0f0f0;
    margin-left: -8px;
  }
`;

export default DodoFooter;
