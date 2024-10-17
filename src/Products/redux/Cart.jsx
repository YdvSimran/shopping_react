import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "./slice";

const Cart = () => {
  const items = useSelector(getItemsSelector);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <h3 >
        Total Items: {items.length} (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart;