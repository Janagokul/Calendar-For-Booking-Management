import React, { useState } from 'react'
import Cal from '../../Component/Calendar Section/Cal';
import Sidebar from '../../Component/Sidebar';
import { Grid, Typography } from '@mui/material';
import Time from '../../Component/Time Section/Time';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';


const MobileCal = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) => {

  const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const [showCal, setShowCal] = useState(true) // this veriable will decide when Time component will be displayed.... after clicking a date variable becomes fasle results Time component will be visible
  console.log(selectedDate.$d);

  const day = selectedDate.$d.getDay()
  console.log(day);




  return (
    <>
      {showCal ?

        <Grid container bgcolor='#f5f7fa' >
          <Grid item xs={12} bgcolor='#f5f7fa'>
            <Sidebar />
          </Grid>
          <Grid item xs={12} textAlign='center' bgcolor='#f5f7fa' ><Typography component='h2' fontSize='1.5em' fontWeight='750' >Select a Date</Typography></Grid>
          <Grid item lg={6} xs={12} bgcolor='#f5f7fa'>
            <Cal setShowCal={setShowCal} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </Grid>

        </Grid>

        :

        <Grid item xs={12} >
          <Grid item xs={12} bgcolor='#e3e8ef' >
            <Grid container gap={2} zIndex='99999' overflow='scroll' position='fixed' top='0%' pt='3%' bgcolor='#efeeeb' >
              <Grid item xs={12} display='inline-flex' justifyContent='center' alignItems='center'>

                <Button variant="outlined" onClick={() => setShowCal(true)}
                  sx={{ minHeight: '43px', minWidth: '43px', position: 'absolute', left: '4%', top: '3%', color: '#1869e0', backgroundColor: '#f5f7fa', border: '0.3px dotted blue', outline: 'none', borderRadius: '50%', fontWeight: 'bold', cursor: 'pointer' }} >
                  <ArrowBackIcon fontSize='medium' />
                </Button>

                <Typography sx={{
                  fontWeight: ' 700',
                  fontSize: '20px',
                  lineHeight: "1.2"
                }} > {Days[day]}</Typography>
              </Grid>
              <Grid item xs={12} textAlign='center'><Typography fontSize='1.5rem'>{`${Months[selectedDate.$d.getMonth()]} ${selectedDate.$d.getDate()}, ${selectedDate.$d.getFullYear()}`}</Typography></Grid>
            </Grid>
          </Grid>

          <Time setSelectedTime={setSelectedTime} />
        </Grid>
      }
    </>
  )
}

export default MobileCal