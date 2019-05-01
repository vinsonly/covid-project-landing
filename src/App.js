import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./assets/styles/main.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
