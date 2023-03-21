import { Grid } from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import "./Calendar.css"
import DesktopCal from "./Screens/DesktopView/DesktopView";
import MobileCal from "./Screens/MobileView/MobileView";



function Calendar() {
 

  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()))
  const [selectedTime, setSelectedTime] = useState('')
  // console.log(selectedTime);
  // console.log(selectedDate);

  return (

    <Grid container>
      <Grid item xs={12} className='MobileView'><MobileCal selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime}  /></Grid>
      <Grid item lg={12} md={12} className='DesktopView'> <DesktopCal selectedDate={selectedDate} setSelectedDate={setSelectedDate}  selectedTime={selectedTime} setSelectedTime={setSelectedTime} /> </Grid>


    </Grid>


  )
}

export default Calendar;
