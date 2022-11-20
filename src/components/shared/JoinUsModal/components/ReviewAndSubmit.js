import React, { useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import PrivacyCheckBox from "../../../../common/components/custom_fields/PrivacyCheckBox";
import Bold from "../../../../common/components/Bold";



function ReviewAndSubmit(props) {

    const { userInput, handleBack, resetFields } = props;
    const [ privacyChecked, setPrivacyChecked ] = useState(false);
    const [ privacyError, setPrivacyError ] = useState();

    function handleChange(){
        if(!privacyChecked) setPrivacyError('');
        setPrivacyChecked(!privacyChecked);
    }

    function handleSubmit() {
        if(!privacyChecked){
            setPrivacyError('Agreement with the privacy policy is required.');
        } else {
            resetFields();
            console.log("close Join us modal.");
        }
    }

    function handleOpenPrivacyModal(){
        console.log("Open privacy modal");
    }

    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Stack spacing={1} sx={{ mb: 3 }}>
                        <Typography variant='body1'>
                            <Bold>Name: </Bold> {userInput.firstName + ' ' + userInput.lastName}
                        </Typography>
                        <Typography variant='body1'>
                            <Bold>Email: </Bold> {userInput.email}
                        </Typography>
                        <Typography variant='body1'>
                            <Bold>Contact Number: </Bold> {userInput.contactNum}
                        </Typography>
                        <Typography variant='body1'>
                            <Bold>Location: </Bold> {userInput.city + ', ' + userInput.province}
                        </Typography>
                        <Typography variant='body1'>
                            <Bold>National ID Number: </Bold> {userInput.nationalId ? userInput.nationalId : 'N/A'}
                        </Typography>
                        <Typography variant='body1'>
                            <Bold>ID Type: </Bold> {userInput.idType ? userInput.idType : 'N/A'}
                        </Typography>
                        <Typography variant='body1'>
                            <Bold>ID Number: </Bold> {userInput.idNumber ? userInput.idNumber : 'N/A'}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid
                    item xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <PrivacyCheckBox
                        helperText={privacyError}
                        onChange={handleChange}
                        onPrivacyOpen={handleOpenPrivacyModal}
                    />
                </Grid>
                <Grid
                    item xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        mt: 2
                    }}
                >
                    <Button
                        type="button"
                        variant="contained"
                        size="large"
                        color='secondary'
                        onClick={handleBack}
                        sx={{ color: 'white' }}
                    >
                        Back
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        sx={{ color: 'white' }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ReviewAndSubmit;