import React, { useState } from "react";
import { Box, Collapse, Grid, Stack } from "@mui/material";
import PageHeader from "../../../common/components/PageHeader";
import header_image from '../../../utils/images/header_image.jpg'
import PropertyPagination from "./components/PropertyPagination";

const styles = {
    header: {
        p: 5,
        pt: 15,
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(30, 30, 30, 0.5)), url(${header_image})`,
        backgroundSize: '100% auto',
        backgroundPosition: '100% 150%',
        backgroundAttachment: 'fixed'
    }
}

function Properties() {

    const [ openFilter, setOpenFilter ] = useState(false);
    const [ filters, setFilters ] = useState({});
    const [ sortDetails, setSortDetails ] = useState(false);

    return (
        <Box className='page-content'>
            <Box className='page-header' sx={styles.header}>
                <PageHeader
                    title='Properties'
                    subtitle='Browse through our upcoming properties and see if it interests you!'
                />
            </Box>
            <Stack spacing={2}>
                <Grid container>
                    <Grid item xs={12}>

                    </Grid>
                    <Collapse
                        in={openFilter}
                        orientation='horizontal'
                    >
                        <Grid item xs={12} sm={6} md={4} lg={3}>

                        </Grid>
                    </Collapse>
                    <Grid 
                        item 
                        xs={12} sm={openFilter ? 6 : 12} md={openFilter ? 8 : 12} lg={openFilter ? 9 : 12}
                    >
                        <PropertyPagination sortDetails={sortDetails} filter={filters} filterOpen={openFilter}/>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    )
}


export default Properties;