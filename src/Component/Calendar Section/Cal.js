import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Grid } from '@mui/material';
import './Cal.css'

const Cal = ({ setShowCal,selectedDate, setSelectedDate }) => {
  
  const changeHandler = (e => {
   setSelectedDate(e)
    setShowCal(false);
   
  })
  


  return (

    <Grid item className='cal' display='flex' m='auto' justifyContent='center' alignItems='center' >

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateCalender']}>
          
          <DemoItem >
            <DateCalendar
              disablePast 

value={selectedDate}

             onChange={changeHandler} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </Grid>
  )
}

export default Cal