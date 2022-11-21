import React from "react";
import { Box, Button, Card, Stack } from "@mui/material";
import SectionHeader from "../../../../common/components/SectionHeader";
import PropTypeSection from "../../../../common/components/sections/PropTypeSection/PropTypeSection";
import { useDispatch } from "react-redux";
import { changeModalState } from "../../../../common/redux/slices/modalSlice";

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

    const dispatch = useDispatch();

    function handleReservationClick(e) {
        dispatch(changeModalState('reservationModal'));
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