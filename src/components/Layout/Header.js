import React from "react";

import classes from "./Header.module.css";

import img from "../../assests/meals (1).jpg";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onClick={props.onShow} />
      </header>
      <div>
        <img className={classes["main-image"]} src={img} alt="" />
      </div>
    </>
  );
};

export default Header;
