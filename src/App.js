import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path={"/ria-2511/Scratch-project"} Component={MainPage}/>
  </Routes>
  </BrowserRouter>
);
}
