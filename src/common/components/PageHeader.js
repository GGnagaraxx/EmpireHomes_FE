import React from "react";
import { Box, Typography } from "@mui/material";


function PageHeader(props) {
    
    const { title, subtitle, color } = props;

    return ( 
        <Box sx={{mb: 5}}>
            <Typography variant='h3' color={color ? color : 'white'}>
                {title}
            </Typography>
            <Typography gutterBottom variant='h6' color={color ? color : 'white'}>
                {subtitle}
            </Typography>
        </Box>
    );
}

export default PageHeader;