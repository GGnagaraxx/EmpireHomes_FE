import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

function TopSection() {
    return (
        <Stack
            className="top-section"
            spacing={5}
            sx={{
                alignItems: 'center'
            }}
        >
            <Grid container>
                <Grid
                    item
                    xs={12} md={8} lg={6}
                    sx={{
                        p: 5,
                        pt: 20,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Typography gutterBottom variant='h2' sx={{ color: 'white' }}>
                        Consectetur incididunt Lorem commodo esse.
                    </Typography>
                    <Typography variant='h4' sx={{ color: 'white' }}>
                        Dolore deserunt non exercitation laborum quis id reprehenderit
                        non proident non adipisicing.
                    </Typography>
                </Grid>
            </Grid>
            <Box
                sx={{
                    width: '80%',
                    height: '100px',
                    display: { xs: 'none', md: 'flex' },
                    backgroundColor: '#fbc02d',
                    borderRadius: '30px'
                }}
            >
                
            </Box>
        </Stack>
    )
}

export default TopSection;