import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "pages/Home/Home";
import Ultrabooks from "pages/Ultrabooks/Ultrabooks";
import Contact from "pages/Contact/Contact";
import NoPage from "pages/NoPage/NoPage";
import Gaming from "pages/Gaming/Gaming";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ultrabooks" element={<Ultrabooks />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gaming" element={<Gaming />} />
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
