import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import CardMatching from "./pages/CardMatching";
import WordGuess from "./pages/WordGuess";
import StonePaperScissors from "./pages/StonePaperScissors";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="mt-14 sm:mt-5 p-2 sm:p-12 w-full flex flex-col min-h-[80vh]">
          {/* Route components are rendered if the path
                    matches the current URL */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/word-guess" element={<WordGuess />} />
            <Route
              path="/stone-paper-scissors"
              element={<StonePaperScissors />}
            />
            <Route path="/card-matching" element={<CardMatching />} />
          </Routes>
          <div></div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
