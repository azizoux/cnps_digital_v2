import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Bandeau from "./components/Bandeau/Bandeau";
import FlashInfo from "./components/FlashInfo/FlashInfo";
import Home from "./pages/Home/Home";
import Assure from "./pages/Assure/Assure";
import Employeur from "./pages/Employeur/Employeur";
import Services from "./pages/Services/Services";
import Beneficiaire from "./pages/Beneficiaire/Beneficiaire";
import Cnps from "./pages/Cnps/Cnps";
import ContactUs from "./pages/ContactUs/ContactUs";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Bandeau />
      <FlashInfo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="assure" element={<Assure />} />
        <Route path="services" element={<Services />} />
        <Route path="beneficiaire" element={<Beneficiaire />} />
        <Route path="cnps" element={<Cnps />} />
        <Route path="employeur" element={<Employeur />} />
        <Route path="conctactus" element={<ContactUs />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
