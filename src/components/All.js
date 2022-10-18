import React from "react";
import DodoFooter from "./dodomenu/DodoFooter";
import DodoMenu from "./dodomenu/DodoMenu";
import Header from "./header/Header";
import HeaderButton from "./header/HeaderButton";
import HeaderSelect from "./header/HeaderSelect";

const All = () => {
  return (
    <div>
      <HeaderSelect />
      <Header />
      <HeaderButton />
      <DodoMenu />
      <DodoFooter />
    </div>
  );
};

export default All;
