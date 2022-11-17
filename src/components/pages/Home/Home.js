import React from "react";
import { Box } from "@mui/material";
import TopSection from "./components/TopSection";
import PropTypeSection from "./components/PropTypeSection";
import BlogSection from "./components/BlogSection";
import ContactUsSection from "../../../common/components/ContactUsSection";

function Home() {


    return (
        <Box className="home-page page-content">
            <TopSection />
            <PropTypeSection />
            <BlogSection />
            <ContactUsSection />
        </Box>

    )
}

export default Home;