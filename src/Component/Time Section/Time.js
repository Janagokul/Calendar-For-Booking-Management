import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import './Time.css'


const Time = ({setSelectedTime, }) => {

    const handelClick=(e)=>{
        setSelectedTime(e.target.value)
    }
    
    return (
        <Grid container textAlign='center' m={{xs:'10% 0 0 0',}} gap={3}>

            <Grid item xs={12} >
                <Grid className='timeWrapper' container gap={2.5} mt='20%' >
                    <Grid item xs={12} pt={{xs:'6%',sm:'7%'}} ><Typography component='h2' fontSize='1.5em' fontWeight='750' >Select a Time</Typography></Grid>
                    <Grid item xs={12}><Typography fontSize='1.2rem'>Duration: 30 min</Typography></Grid>
                    <Grid item xs={12} maxHeight='80vh'>
                        <Grid container textAlign='center' zIndex='-10' bgcolor=' #c3cfe2' overflow='hidden' >
                            <Grid item className='time' xs={12} sm={12} lg={12}  md={12} overflow='hidden' >
                                {
                                    ['12:00',"1:00", '2:00', '3:00', '4:00', '5:00', '6:00', "7:00",'8:00','9:00','10:00','11:00' ,'12:00',"1:00", '2:00', '3:00', '4:00', '5:00', '6:00', "7:00",'8:00','9:00','10:00','11:00','13:00','14:00','15:00'].map((item ,i) => {
                                        return (
                                            <Box className='selectTime' sx={{
                                                border: '1px solid black',
                                                borderRadius:'7px',
                                                margin:'4%',
                                                '&:hover': {
                                                    backgroundColor: '#ebedee',
                                                 opacity: [0.9, 0.8, 0.7],}
                                            }} key={i}>

                                                <Button value={item} onClick={handelClick}   sx={{ border: '0.3px doted blue', fontSize: '1.5rem', fontWeight: '700' }} >{item } am</Button>
                                            </Box>

                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>




        </Grid>
    )
}

export default Time