import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "pages/Home/Home";
import Blogs from "pages/Blogs/Blogs";
import Contact from "pages/Contact/Contact";
import NoPage from "pages/NoPage/NoPage";
import Red from "pages/Red/Red";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="red1" element={<Red />} />
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
