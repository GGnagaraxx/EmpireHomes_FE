import React, { useState } from "react";
import { Card, Modal, Typography } from "@mui/material";
import JoinUsForm from "./components/JoinUsForm";

const styles = {
    modal: {
        py: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        p: 3,
        width: '60%',
        minWidth: 400,
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid white',
        overflowY: 'auto'
    },
    cardHeader: {
        mb: 3
    }
}

function JoinUsModal() {

    const [ open, setOpen ] = useState(false);

    function handleClose() {
        setOpen(false);
    }

    return ( 
        <Modal
            open={open}
            onClose={handleClose}
            sx={styles.modal}
        >
            <Card sx={styles.card}>
                <Typography variant='h4' sx={styles.cardHeader}>
                    Application Form
                </Typography>
                <JoinUsForm/>
            </Card>
        </Modal>
    );
}

export default JoinUsModal;