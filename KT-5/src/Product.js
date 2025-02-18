import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./store";
import "./App.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <div className="controls">
        <button className="btn" onClick={() => dispatch(decrement(product.id))}>-</button>
        <span className="quantity">{product.quantity}</span>
        <button className="btn" onClick={() => dispatch(increment(product.id))}>+</button>
      </div>
    </div>
  );
};

export default Product;