import React from "react";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default App;
