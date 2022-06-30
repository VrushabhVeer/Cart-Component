import React from "react";
import PriceLabel from "./PriceLabel";
import Quantity from "./Quantity";

const CartItem = ({ label, price, qty, id, handelQtyChange }) => {
  return (
    <div className="cartItem">
      <div>
        <PriceLabel label={label} price={price} />
      </div>
      <div className="totalDiv">
        <Quantity qty={qty} id={id} changeCount={handelQtyChange} />
      </div>
    </div>
  );
};

export default CartItem;
