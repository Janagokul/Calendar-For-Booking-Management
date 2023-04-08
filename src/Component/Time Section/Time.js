import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import './Time.css'

let arr1 = []



// TimeArr.forEach((time)=>{
//     BookedTime.forEach(booked)=>{
//         if (time.value===booked.value){

//         }
//     }
// })


const Time = ({ setSelectedTime, }) => {
    // const [isDisabled, setIsDisabled] = useState(false)

    const TimeArr = [
        { time: '08:30 AM', value: '8:30', isDisabled: false },
        { time: '09:00 AM', value: '9:00', isDisabled: false },
        { time: '09:30 AM', value: '9:30', isDisabled: false },
        { time: '10:00 AM', value: '10:00', isDisabled: false },
        { time: '10:30 AM', value: '10:30', isDisabled: false },
        { time: '11:00 AM', value: '11:00', isDisabled: false },
        { time: '11:30 AM', value: '11:30', isDisabled: false },
        { time: '12:00', value: '12:00', isDisabled: false },
        // { time: '12:30 PM', value: '12:30' },
        // { time: '01:00 PM', value: '13:00' },
        // { time: '01:30 PM', value: '13:30' },
        // { time: '02:00 PM', value: '14:00' },
        // { time: '02:30 PM', value: '14:30' },
        // { time: '03:00 PM', value: '15:00' },
        // { time: '03:30 PM', value: '15:30' },
        // { time: '04:00 PM', value: '16:00' },
        // { time: '04:30 PM', value: '16:30' },
        // { time: '05:00 PM', value: '17:00' },
        // { time: '05:30 PM', value: '17:30' },
        // { time: '06:00 PM', value: '18:00' },
        // { time: '06:30 PM', value: '18:30' },
        // { time: '07:00 PM', value: '19:00' },
        // { time: '07:30 PM', value: '19:30' },
        // { time: '08:00 PM', value: '20:00' },
        // { time: '08:30 PM', value: '20:30' },
        // { time: '09:00 PM', value: '21:00' },
        // { time: '09:30 PM', value: '21:30' },
        // { time: '10:00 PM', value: '22:00' },
    ]

    const BookedTime = [
        { time: '10:00 AM', value: '10:00' },
        { time: '12:00', value: '12:00' },
        { time: '02:00 PM', value: '14:00' },
        { time: '08:00 PM', value: '20:00' },
        //     { time: '08:30 PM', value: '20::30' },
    ]
    useEffect(() => {

        const BookingTime = TimeArr.map((item,i) => {
           for (const booked of BookedTime) {
                if (item.value === booked.value) {
                   console.log(item.isDisabled,i);
                    return {time:item.time,value:item.value,isDisabled: !(item.isDisabled)}
                }
                else{
                    return item={...item}
                }
            }
        })
        console.log(BookingTime);
    }, [BookedTime])


    const handelClick = (e) => {
        setSelectedTime(e.target.value)
    }





    return (
        <Grid container textAlign='center' m={{ xs: '10% 0 0 0', }} gap={3}>

            <Grid item xs={12} >
                <Grid className='timeWrapper' container gap={2.5} mt='20%' >
                    <Grid item xs={12} pt={{ xs: '6%', sm: '7%' }} ><Typography component='h2' fontSize='1.5em' fontWeight='750' >Select a Time</Typography></Grid>
                    <Grid item xs={12}><Typography fontSize='1.2rem'>Duration: 30 min</Typography></Grid>
                    <Grid item xs={12} maxHeight='80vh'>
                        <Grid container textAlign='center' zIndex='-10' bgcolor=' #c3cfe2' overflow='hidden' >
                            <Grid item className='time' xs={12} sm={12} lg={12} md={12} overflow='hidden' >


                                {TimeArr.map((item, i) => {




                                    return (
                                        <Box className='selectTime' sx={{
                                            border: '1px solid black',
                                            borderRadius: '7px',
                                            margin: '4%',
                                            '&:hover': {
                                                backgroundColor: '#ebedee',
                                            }
                                        }} key={i}>
                                            <Button value={item.value} onClick={handelClick}
                                                sx={{ border: '0.3px doted blue', fontSize: '1.5rem', fontWeight: '700' }} >
                                                {item.time}
                                            </Button>
                                        </Box>
                                    )




                                }
                                )
                                }

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>




        </Grid >
    )
}

export default Time