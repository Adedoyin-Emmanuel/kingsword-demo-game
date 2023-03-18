import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Result from "./pages/Result";
import Category from "./pages/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./autoload";
import Game from "./pages/Game";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Home />} />
          <Route path="/app/category" element={<Category />} />
          <Route path="/app/category/:category" element={<Game />} />
          <Route path="/app/result/:category" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
  
export default App;
