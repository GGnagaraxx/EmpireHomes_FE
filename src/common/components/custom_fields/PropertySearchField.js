import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { propertyData } from "../../../utils/sampleData";


function PropertySearchField(props) {

    const { handleSearchChange, sx, required, color } = props;
    const nameOptions = _.uniqBy(propertyData, 'name').map((prop) => prop.name);

    return (
        <Autocomplete
            disablePortal
            id='name'
            options={nameOptions}
            onChange={handleSearchChange}
            sx={sx ? sx : 
                {
                    backgroundColor: '#ffffff',
                    borderRadius: '5px',
                    width: {
                        xs: '40%',  
                        md: '25%'
                    },
                }
            }
            renderInput={(params) => <TextField {...params} required={required} id="name" label="Search Property" color={color ? color : 'primary'} />} />

    );
}

export default PropertySearchField;