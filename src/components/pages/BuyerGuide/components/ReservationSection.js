import React from "react";
import { Box, Button, Card, Stack } from "@mui/material";
import SectionHeader from "../../../../common/components/SectionHeader";
import PropTypeSection from "../../../../common/components/sections/PropTypeSection/PropTypeSection";

const styles = {
    headerBox: {
        px: 5,
        pt: 3,
    },
    card: {
        py: 2,
        px: 5,
        boxShadow: '0 0 5px grey'
    }
}

function ReservationSection() {

    function handleReservationClick(e) {
        console.log('Open Reservation Modal')
    }

    return (
        <Box>
            <Box sx={styles.headerBox}>
                <Card sx={styles.card}>
                    <SectionHeader
                        title="Apply for a Reservation"
                        subtitle="Planning on renting or buyin a unit? Apply for a reservation!"
                        buttonProps={{
                            label: 'APPLY FOR RESERVATION',
                            variant: 'contained',
                            onClick: handleReservationClick,
                            sx: {
                                color: 'white'
                            }
                        }} />
                </Card>
            </Box>
            <PropTypeSection />
        </Box>
    );
}

export default ReservationSection;