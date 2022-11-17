import React from "react";
import { Box, Button, Typography } from "@mui/material";


function SectionHeader(props) {

    const { title, subtitle, buttonProps } = props;

    return (
        <Box sx={{mb: 5}}>
            <Typography variant='h3' color='text.primary'>
                {title}
            </Typography>
            <Typography gutterBottom variant='body2' color='text.primary'>
                {subtitle}
            </Typography>
            {buttonProps ?
                <Button
                    variant={buttonProps.variant ? buttonProps.variant : 'outlined'}
                    onClick={buttonProps.onClick}
                    color={buttonProps.color ? buttonProps.color : 'primary'}
                    sx={{color: buttonProps.textColor ? buttonProps.textColor : 'white'}}
                >
                    {buttonProps.label}
                </Button> : null
            }
        </Box>
    )
}


export default SectionHeader;