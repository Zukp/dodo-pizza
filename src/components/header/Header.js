import React from "react";
import styled from "styled-components";
import image from "./img/Rectangle 38.png";

const Images = [
  {
    img: image,
  },
  {
    img: image,
  },
  {
    img: image,
  },
  {
    img: image,
  },
  {
    img: image,
  },
  {
    img: image,
  },
];

const Header = () => {
  return (
    <StyledDiv>
      <StyledDivScroll>
        {Images.map((element) => (
          <div>
            <img src={element.img} alt="photo" />
          </div>
        ))}
      </StyledDivScroll>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  width: 408px;
  max-width: fit-content;
  max-height: fit-content;
  height: 150px;
  @media screen and (max-width: 414px) {
    width: 400px;
    max-width: fit-content;
    max-height: fit-content;
    height: 150px;
  }
`;
const StyledDivScroll = styled.div`
  overflow-y: scroll;
  overflow-x: scroll;
  height: fit-content;
  display: flex;
  max-height: 790px;
  height: 150px;
  @media screen and (max-width: 414px) {
    overflow-y: scroll;
    overflow-x: scroll;
    height: fit-content;
    display: flex;
    max-height: 790px;
    height: 150px;
  }
`;

export default Header;
