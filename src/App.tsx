import React from "react";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { routes } from "./routes";
import { Footer } from "./Components/Footer";
import { Sidebar } from "./Components/Sidebar";

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route caseSensitive path={routes.home} element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
