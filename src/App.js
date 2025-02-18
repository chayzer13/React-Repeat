import React from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Dino } from "./Components/Dino";
import { Rent } from "./Components/Rent";
import { Service } from "./Components/Service";
import { FT } from "./Components/FT";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Dino />
      <Service />
      <FT />
      <Rent />
      <Footer />
    </div>
  );
}

export default App;