import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import CardMatching from "./pages/CardMatching";
import WordGuess from "./pages/WordGuess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="mt-14 sm:mt-5 p-2 sm:p-12 w-full flex flex-col min-h-[80vh]">
          <WordGuess />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
