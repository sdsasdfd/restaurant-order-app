import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import Cartcontext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const cartCtx = useContext(Cartcontext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}> {props.description} </div>
        <div className={classes.price}> {price} </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
