import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";
import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  const cartCtx = useContext(cartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
