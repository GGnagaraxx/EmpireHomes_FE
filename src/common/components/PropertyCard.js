import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";


function PropertyCard(props) {

    const { propData, showProgress } = props;

    return (
        <Card>
            <CardMedia
                component="img"
                height="250"
                image={propData.img}
                alt="sample image"
            />
            <CardContent>
                <Typography variant='h4'>
                    {propData.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {propData.location}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PropertyCard;