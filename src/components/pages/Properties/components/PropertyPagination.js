import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Pagination, Stack } from "@mui/material";
import { partitionList, sortList } from "../../../../common/functions/listFunctions";
import { propertyData } from "../../../../utils/sampleData";
import PropertyCard from "../../../../common/components/cards/PropertyCard";
import _ from "lodash";

const styles = {
    paginationBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    spinner: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridContainer: {
        minHeight: 500
    },
    gridItem: {
        p: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

function PropertyPagination(props) {

    const { filter, sortDetails, filterOpen } = props;

    const [propertyList, setPropertyList] = useState([]);
    const [currPage, setCurrPage] = useState(1);

    useEffect(() => {
        updatePropertyList();
    }, [sortDetails, filter])

    function updatePropertyList() {
        let propList = _.compact(propertyData.map(filterFunction))
        console.log("===========================================");
        console.log("filtered: ", propertyData.map(filterFunction));
        console.log("compact: ", propList);
        propList = sortList(propList, sortDetails);
        console.log("sorted: ", propList);
        propList = partitionList(propList, 12);
        console.log("partitioned: ", propList);

        setPropertyList(propList);
    }

    function filterFunction(o) {
        let valid = true;

        for (const key in filter) {
            if (!filter[key]) continue;
            if (key == 'maxPrice') {
                if(o[key] > parseInt(filter[key])){
                    valid = false;
                    break;
                }

            } else if (key == 'minPrice') {
                if(o[key] < parseInt(filter[key])){
                    valid = false;
                    break;
                }

            } else if (o[key] != filter[key]) {
                valid = false;
                break;
            }
        }
        
        if(valid) return o;
    }

    function handlePageChange(e, page) {
        setCurrPage(page);
    }

    return (
        <Stack spacing={3} sx={{ py: 5 }}>
            <Box sx={styles.paginationBox}>
                <Pagination
                    onChange={handlePageChange}
                    count={propertyList.length}
                    page={currPage}
                    variant="outlined" color='primary'/>
            </Box>

            <Grid container sx={styles.gridContainer}>
                {propertyList.length ?
                    propertyList[currPage - 1].map((property) => {
                        return (
                            <Grid 
                                key={property.id}
                                item
                                xs={12} sm={filterOpen ? 12 : 6} 
                                md={filterOpen ? 6 : 4} lg={filterOpen ? 4 : 3}
                                sx={styles.gridItem}>
                                <PropertyCard propData={property} showProgress />
                            </Grid>
                        )
                    }) : 
                    <Grid item xs={12} sx={styles.spinner}>
                        <CircularProgress color="primary" />
                    </Grid>        
                }
            </Grid>

            <Box sx={styles.paginationBox}>
                <Pagination
                    onChange={handlePageChange}
                    count={propertyList.length}
                    page={currPage}
                    variant="outlined" color='primary'/>
            </Box>
        </Stack>
    );
}

export default PropertyPagination;