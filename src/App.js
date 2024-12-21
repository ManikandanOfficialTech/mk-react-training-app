import React from "react";
import "./style.css";
import Header from "./components/Header/Header";
import Count from "./components/Count/Count";

export default function App() {
  return (
    <div>
      <h1>React training App!</h1>
      <Header />
      <Count />
    </div>
  );
}
