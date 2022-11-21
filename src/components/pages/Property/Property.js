import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Card, getListItemSecondaryActionClassesUtilityClass, Stack, Typography } from "@mui/material";
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ProgressIcon from '@mui/icons-material/HourglassTop';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SellIcon from '@mui/icons-material/Sell';
import PageHeader from "../../../common/components/PageHeader";
import Bold from "../../../common/components/Bold";
import { useDispatch } from "react-redux";
import { changeModalState } from "../../../common/redux/slices/modalSlice";
import { useGetPropertyQuery } from "../../../common/redux/apiSlices/propertyApiSlice";

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
    },
    mapBox: {
        my: 5,
    },
    mapOuter: {
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden'
    },
    mapCanvas: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
}

function Property() {


    const dispatch = useDispatch();
    const params = useParams();
    const { status, data } = useGetPropertyQuery(params.id);
    const [ propData, setPropData ] = useState({});
    const [ mapLocation, setMapLocation ] = useState("");

    useEffect(() => {
        if(status == "fulfilled"){
            setPropData(data);
            setMapLocation(
                data.location.replace(/" "/g, '%20')
            );
        }
    }, [status])

    function handleOpenModal() {
        dispatch(changeModalState('reservationModal'));
    }

    return (
        <Box
            className='page-content'
            sx={{
                ...styles.pageContent,
                backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(30, 30, 30, 0.5)), url(${propData.imageUrl})`
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
                            <LikeIcon /> {propData.demand}
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
                    <Box sx={styles.descBox}>
                        <Typography variant='h6' color='inherit'>
                            {propData.description}
                        </Typography>
                        <Box sx={styles.mapBox}>
                            <Typography gutterBottom variant='h6' color='inherit' sx={styles.icons}>
                                <Bold>{propData.location}</Bold>
                            </Typography>
                            <div className="mapouter" style={styles.mapOuter}>
                                <div className="gmap_canvas" style={styles.mapCanvas}>
                                    <iframe
                                        width="100%" height="500"
                                        id="gmap_canvas"
                                        src={`https://maps.google.com/maps?q=${mapLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
                                </div>
                            </div>
                        </Box>
                    </Box>
                    <Box sx={styles.statsBox}>
                        <Button
                            variant='contained' color='primary'
                            size='large' onClick={handleOpenModal}
                            sx={styles.button}>
                            RESERVE NOW
                        </Button>
                    </Box>
                </Stack>
            </Card>
        </Box>
    )
}


export default Property;