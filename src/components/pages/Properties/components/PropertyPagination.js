import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Pagination, Stack } from "@mui/material";
import { filterList, partitionList, sortList } from "../../../../common/functions/listFunctions";
import { propertyData } from "../../../../utils/sampleData";
import PropertyCard from "../../../../common/components/cards/PropertyCard";

const styles = {
    paginationBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    spinner: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        p: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

function PropertyPagination(props) {

    const { filter, sortDetail, filterOpen } = props;

    const [propertyList, setPropertyList] = useState([]);
    const [currPage, setCurrPage] = useState(1);

    useEffect(() => {
        updatePropertyList();
    }, [])

    function updatePropertyList() {
        let propList = filterList(propertyData, filterFunction);
        console.log("Filtered: ", propList);
        propList = sortList(propertyData, sortDetail);
        console.log("Sorted: ", propList);
        propList = partitionList(propList, 12);
        console.log("Partitioned: ", propList);

        setPropertyList(propList);
    }

    function filterFunction(o) {
        let valid = true;

        for (const key in filter) {
            if (!filter[key]) continue;
            if (key == 'maxPrice' && !(o[key] < filter[key])) {
                valid = false;
                break;

            } else if (key == 'minPrice' && !(o[key] > filter[key])) {
                valid = false;
                break;

            } else if (!o[key] == filter[key]) {
                valid = false;
                break;
            }
        }

        return valid;
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

            <Grid container>
                {console.log(propertyList.length, propertyList[currPage - 1])}
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
                    <Box sx={styles.spinner}>
                        <CircularProgress color="primary" />
                    </Box>        
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