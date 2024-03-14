import React, { useState } from "react";
import "./App.css";
import Main from "./components/Box/Main";
import Header from "./components/Box/Header";
import Footer from "./components/Box/Footer";

function App() {
  return (
    <div className="App">
      {/* <div className="fuction">
        <button id="increment">Increment</button>
        <label id="value">1</label>
        <button id="decrement">Decrement</button>
      </div> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
