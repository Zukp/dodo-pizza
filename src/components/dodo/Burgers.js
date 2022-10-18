import React from "react";
import { Routes, Route } from "react-router-dom";
import All from "../../components/All";
import DodoFooter from "../dodomenu/DodoFooter";
import Baskets from "./Baskets";
import Profile from "./Profile";

const Burgers = () => {
  return (
    <div>
      <Routes>
        <Route path="/dodo-pizza" element={<All />} />
        <Route path="/baskets" element={<Baskets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/burgers" element={<Burgers />} />
      </Routes>
      <DodoFooter />
    </div>
  );
};

export default Burgers;
