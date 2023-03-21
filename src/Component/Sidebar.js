import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

const Sidebar = () => {
    return (

        <Grid className='details' container  rowSpacing={3} direction='row'
            sx={{ width: '100%', textAlign: 'center', pb: 2, my: 1 }}>

            <Grid item xs={12}> <Typography sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '24px', px: 3 }} >Admin Name</Typography></Grid>
            <Grid item xs={12}> <Typography sx={{ fontSize: '26px', fontWeight: '700', lineHeight: '32px', px: 2 }} >30 Minutes Meeting</Typography></Grid>
            <Grid item xs={12}>
                <Box sx={{
                    display: 'flex', alignContent: 'center', justifyContent: 'center'
                }}><AccessTimeTwoToneIcon /> <Typography sx={{ display: 'inline-flex', fontSize: 17, mx: 1 }}>30 min</Typography></Box></Grid>

        </Grid>

    )
}

export default Sidebar