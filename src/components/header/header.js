import React from "react";
import Intro from "./intro/intro";
import Nav from "./navbar/navbar";
import "./style.scss";
const Header = () => {
  return (
    <>
      <Nav></Nav>
      <Intro></Intro>
    </>
  );
};

export default Header;
