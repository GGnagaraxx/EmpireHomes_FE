import React from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ProgressIcon from '@mui/icons-material/HourglassTop';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SellIcon from '@mui/icons-material/Sell';
import { propertyData } from "../../../utils/sampleData";
import PageHeader from "../../../common/components/PageHeader";

const styles = {
    pageContent: {
        pt: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat',
    },
    card: {
        px: '5%',
        py: 5,
        mb: 10,
        width: '80%',
        maxWidth: 800,
        borderRadius: '15px',
        boxShadow: '0px 0px 10px orange',
        backgroundColor: '#000000bb',
        color: 'white'
    },
    statsBox: {
        display: 'flex',
        justifyContent: 'space-evenly',
        mb: 3,
    },
    descBox: {
        my: 2,
        p: 3,
        border: '1px solid orange'
    },
    icons: {
        fontSize: 'large'
    },
    button: {
        color: 'white',
        fontWeight: 'bold'
    }
}

function Property() {

    const params = useParams();
    const propData = propertyData.find((prop) => prop.id == params.id);

    return (
        <Box
            className='page-content'
            sx={{
                ...styles.pageContent,
                backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(30, 30, 30, 0.5)), url(${propData.img})`
            }}>
            <Card sx={styles.card}>
                <Stack>
                    <PageHeader
                        title={propData.name}
                        subtitle={propData.location}
                        color='white'
                    />
                    <Box sx={styles.statsBox}>
                        <Typography variant='body1' color='inherit' sx={styles.icons}>
                            <LikeIcon /> {propData.demands}
                        </Typography>
                        <Typography variant='body1' color='inherit' sx={styles.icons}>
                            <ProgressIcon /> {propData.progress + '%'}
                        </Typography>
                        <Typography variant='body1' color='inherit' sx={styles.icons}>
                            <ApartmentIcon /> {propData.type}
                        </Typography>
                    </Box>
                    <Box sx={styles.statsBox}>
                        <Typography variant='body1' color='inherit' sx={styles.icons}>
                            <SellIcon /> &#8369;{propData.minPrice + ' - '} &#8369;{propData.maxPrice}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' color='inherit' sx={styles.descBox}>
                            {propData.desc}
                        </Typography>
                    </Box>
                    <Box sx={styles.statsBox}>
                        <Button variant='contained' color='primary' size='large' sx={styles.button}>
                            RESERVE NOW
                        </Button>
                    </Box>
                </Stack>
            </Card>
        </Box>
    )
}


export default Property;