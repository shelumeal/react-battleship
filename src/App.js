import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { GameProvider } from "./store/GameContext";

function App() {
  return (
    <GameProvider>
      <div className="d-flex flex-column min-vh-100 App">
        <Header />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </GameProvider>
  );
}

export default App;
