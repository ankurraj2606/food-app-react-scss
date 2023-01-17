import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import Header from "./src/components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="btn-container">
        <button className="btn">Normal</button>
        <button className="btn-primary">Primary</button>
        <button className="btn-secondary">Secondary</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
