import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title">Your Amazon Cart is empty</h2>
      </div>
      <div className='"checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
