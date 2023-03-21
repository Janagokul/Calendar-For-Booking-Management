import React, { useState } from 'react';
import Sidebar from '../../Component/Sidebar';
import Cal from '../../Component/Calendar Section/Cal';
import { Grid } from '@mui/material';
import Time from '../../Component/Time Section/Time';

const DesktopCal = ({selectedDate, setSelectedDate, selectedTime, setSelectedTime}) => {
  const [showTime, setShowTime] = useState('none')
  return (

    // <Grid container className='continer' mt='10%' bgcolor='#ebedee' minWidth='80%' mx='auto' md={12} lg={12} >
    //   <Grid item  md={4} lg={4}  display='flex' justifyContent='center' alignItems='center'>
    //     <Sidebar />
    //   </Grid>
    //   <Grid item className='calendar'  minWidth={{md:'6',lg:'6'}}  >
    //     <Cal setShowCal={setShowTime} />
    //   </Grid>

      
    //     <Grid item md={2} lg={2}  display={showTime} >
    //       <Time  />
    //     </Grid>
    
    // </Grid>


    <Grid container className='container' >
      <Grid item className='sidebar'  bgcolor='#f5f7fa'  lg={3} sm={8} md={3}> <Sidebar /></Grid>
      <Grid item  className='calendar'  bgcolor='#f5f7fa'  lg={6}  sm={8} md={6}><Cal setShowCal={setShowTime} selectedDate={selectedDate} setSelectedDate={setSelectedDate} /></Grid>
      <Grid item display={showTime} className='Time' bgcolor='#e3e8ef' lg={3}  sm={4}  md={3}><Time setSelectedTime={setSelectedTime}  /></Grid>
    </Grid>


  )
}

export default DesktopCal