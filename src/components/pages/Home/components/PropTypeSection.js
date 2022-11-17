import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CategoryCarousel from "../sub_components/PropTypeSection/CategoryCarousel";
import PropsCarousel from "../sub_components/PropTypeSection/PropsCarousel";
import SectionHeader from "../../../../common/components/SectionHeader";
import { Link } from "react-router-dom";


function PropTypeSection() {

    const [selectedCategory, setSelectedCategory] = useState('');

    function handleSelectCategory(e) {
        const category = e.target.innerText
        if (category == selectedCategory) {
            setSelectedCategory('')
        } else {
            setSelectedCategory(category)
        }
    }



    return (
        <Box className="section" sx={{ p: 5 }}>
            <Link to='/properties' style={{textDecoration: 'none'}}>
                <SectionHeader
                    title='Top Priorities'
                    subtitle="Take a look at Empire Home's most demanded properties in the Philippines!"
                    buttonProps={{
                        label: 'View All Properties',
                        variant: 'contained'
                    }}
                />
            </Link>
            <CategoryCarousel
                handleSelectCategory={handleSelectCategory}
                selectedCategory={selectedCategory}
            />
            <Box className='mt-5'>
                <PropsCarousel selectedCategory={selectedCategory} />
            </Box>
        </Box>
    )
}

export default PropTypeSection;