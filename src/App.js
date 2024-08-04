
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import FormFetch from "./components/FormFetch";
import FormAxios from "./components/FormAxios";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-fetch" element={<FormFetch />} />
        <Route path="/form-axios" element={<FormAxios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
