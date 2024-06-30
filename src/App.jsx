import React from "react";
import Header from "./assets/component/header";
import Home from "./pages/home";
import Footer from "./assets/component/footer";
import LayananUmum from "./pages/layanan";
import InfoKamar from "./pages/info-kamar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/singUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<LayananUmum />} />
        <Route path="/info-kamar" element={<InfoKamar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
