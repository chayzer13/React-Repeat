import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./store";
import ProductList from "./ProductList";
import "./App.css";

const App = () => {
  const [newProduct, setNewProduct] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (newProduct.trim()) {
      dispatch(addProduct(newProduct));
      setNewProduct("");
    }
  };

  return (
    <div className="app">
      <div className="input-container">
        <input
          type="text"
          placeholder="Имя нового продукта....."
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button onClick={handleAdd}>Добавить</button>
      </div>
      <ProductList />
    </div>
  );
};

export default App;