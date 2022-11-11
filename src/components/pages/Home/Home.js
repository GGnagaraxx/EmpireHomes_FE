import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import TopSection from "./components/TopSection";
import { propertyData } from "../../../utils/sampleData";
import PropertyCard from "../../../common/components/PropertyCard";

function Home() {


    return (
        <Box className="home-page">
            <TopSection />
        </Box>

    )
}

export default Home;