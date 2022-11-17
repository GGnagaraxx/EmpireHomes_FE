import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Properties from "../pages/Properties/Properties";
import SellerGuide from "../pages/SellerGuide/SellerGuide";
import BuyerGuide from "../pages/BuyerGuide/BuyerGuide";
import Guides from "../pages/Guides/Guides";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";


function AppRouter() {

    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/seller-guide" element={<SellerGuide />} />
                <Route path="/buyer-guide" element={<BuyerGuide />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter;