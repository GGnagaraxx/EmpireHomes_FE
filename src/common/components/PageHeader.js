import React from "react";
import { Box, Typography } from "@mui/material";


function PageHeader(props) {
    
    const { title, subtitle } = props;

    return ( 
        <Box sx={{mb: 5}}>
            <Typography variant='h3' color='white'>
                {title}
            </Typography>
            <Typography gutterBottom variant='h6' color='white'>
                {subtitle}
            </Typography>
        </Box>
    );
}

export default PageHeader;