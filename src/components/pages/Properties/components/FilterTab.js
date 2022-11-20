import React, { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
import _ from "lodash";
import { propertyData, propertyTypes } from "../../../../utils/sampleData";


function FilterTab(props) {

    const { filters, handleFilterChange } = props;

    const categoryOptions = propertyTypes.map((type) => type.type)
    const locationOptions = _.uniqBy(propertyData, 'location').map((prop) => prop.location)

    return (
        <Stack spacing={2} sx={{ p: 5, pb: 0 }}>
            <Autocomplete
                color='primary'
                disablePortal
                freeSolo
                id='type'
                options={categoryOptions}
                value={filters.type}
                onChange={handleFilterChange}
                componentsProps={{
                    clearIndicator: {
                        onClick: (e) => {
                            handleFilterChange({
                                target: { id: 'type' }
                            }, '')
                        }
                    }
                }}
                renderInput={(params) => <TextField {...params} id="type" label="Categories" />} />

            <Autocomplete
                color='primary'
                disablePortal
                freeSolo
                id='location'
                options={locationOptions}
                value={filters.location}
                onChange={handleFilterChange}
                componentsProps={{
                    clearIndicator: {
                        onClick: (e) => {
                            handleFilterChange({
                                target: { id: 'location' }
                            }, '')
                        }
                    }
                }}
                renderInput={(params) => <TextField {...params} id="location" label="Location" />} />

            <TextField
                type='number' id="minPrice"
                label="Min Price" variant="outlined"
                onChange={handleFilterChange}
                inputProps={{
                    min: 0,
                    max: 99999999
                }} />
            <TextField 
                type='number' id="maxPrice" 
                label="Max Price" variant="outlined" 
                onChange={handleFilterChange}/>

        </Stack>
    );
}

export default FilterTab;