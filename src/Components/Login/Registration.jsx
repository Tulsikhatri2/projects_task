import React from 'react'
import { Box, TextField, Checkbox, Button } from '@mui/material'
import background from '../../Assets/background.jpg'
import { useNavigate } from 'react-router-dom'

const Registration = () => {

  const navigate = useNavigate()

  return (
    <>
    <Box className="registrationScreen">
        <img src={background} width="100%" height="100%"/>
        <Box className="registrationBox">
          <p><u>Register Today</u></p>
          <Box className="detailsBox">
          <TextField label="First Name"
          InputProps={{
            style: {
              borderRadius: "3vh",
              height:"6vh",
              fontSize:"2vh",
              width:"16vw"
            },
          }}
          InputLabelProps={{
            style:{
              fontSize:"2vh",
             marginTop:"-0.7vh"
            }
          }}/>
          <TextField label="Last Name"
          InputProps={{
            style: {
              borderRadius: "3vh",
              height:"6vh",
              fontSize:"2vh",
              width:"16vw"
            },
          }}
          InputLabelProps={{
            style:{
              fontSize:"2vh",
              marginTop:"-0.7vh"
            }
          }}/>
          <TextField label="Email"
          InputProps={{
            style: {
              borderRadius: "3vh",
              height:"6vh",
              fontSize:"2vh",
              width:"16vw"
            },
          }}
          InputLabelProps={{
            style:{
              fontSize:"2vh",
              marginTop:"-0.7vh"
            }
          }}/>
          <TextField label="Alternate Email"
          InputProps={{
            style: {
              borderRadius: "3vh",
              height:"6vh",
              fontSize:"2vh",
              width:"16vw"
            },
          }}
          InputLabelProps={{
            style:{
              fontSize:"2vh",
              marginTop:"-0.7vh"
            }
          }}/>
          <TextField label="Password"
          InputProps={{
            style: {
              borderRadius: "3vh",
              height:"6vh",
              fontSize:"2vh",
              width:"16vw"
            },
          }}
          InputLabelProps={{
            style:{
              fontSize:"2vh",
              marginTop:"-0.7vh"
            }
          }}/>
          <TextField label="Confirm Password"
          InputProps={{
            style: {
              borderRadius: "3vh",
              height:"6vh",
              fontSize:"2vh",
              width:"16vw"
            },
          }}
          InputLabelProps={{
            style:{
              fontSize:"2vh",
              marginTop:"-0.7vh"
            }
          }}/>
          <TextField label="Phone Number"
          InputProps={{
            style: {
              borderRadius: "3vh",
              height:"6vh",
              fontSize:"2vh",
              width:"16vw"
            },
          }}
          InputLabelProps={{
            style:{
              fontSize:"2vh",
              marginTop:"-0.7vh"
            }
          }}/>
          <TextField label="Alternate Phone Number"
          InputProps={{
            style: {
              borderRadius: "3vh",
              height:"6vh",
              fontSize:"2vh",
              width:"16vw"
            },
          }}
          InputLabelProps={{
            style:{
              fontSize:"2vh",
              marginTop:"-0.7vh"
            }
          }}/>
          </Box>
          <Box className="checkBox" sx={{width:"27vw"}}>
            <Checkbox size='small'/><p>I hereby declare that the information given above is true and complete to the best of my knowledge</p>
          </Box>
          <Box className="checkBox" sx={{marginTop:"2vh",width:"27vw"}}>
            <Checkbox size='small'/><p> I agree to all <span className='register'>terms & conditions</span> of this site</p>
          </Box>
          <Box className="buttonsBox">

            <Button className='buttonDesign' variant='contained' 
            sx={{fontSize:"2vh",
              fontFamily:"'Trebuchet MS'",
              fontWeight:"bold"
            }}
            onClick={()=>navigate("/")}>Back</Button>

            <Button className='buttonDesign' variant='contained'
            sx={{fontSize:"2vh",
              fontFamily:"'Trebuchet MS'",
              fontWeight:"bold"
            }}
            onClick={()=>navigate("/registrationSuccess")}>Register</Button>

          </Box>
        </Box>
    </Box>
    </>
  )
}

export default Registration