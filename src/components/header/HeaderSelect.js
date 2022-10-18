import React from "react";
import styled from "styled-components";
import img from "../header/img/Gp.png";
const HeaderSelect = () => {
  return (
    <Div>
      <div>
        <form>
          <Select name="cars" id="cars">
            <option value="Москва">Москва</option>
            <option value="войти">войти</option>
          </Select>
        </form>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </Div>
  );
};
const Div = styled("div")`
  margin-top: 42px;
  margin-bottom: 30px;
  width: 360px;
  display: flex;
  justify-content: space-between;
`;
const Select = styled("select")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #222831;
  border: none;
  padding: 10px;
`;
export default HeaderSelect;
