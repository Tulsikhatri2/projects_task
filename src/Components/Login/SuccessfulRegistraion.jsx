import React from 'react'
import congratulations from "../../Assets/success.jpg"
import tickMark from "../../Assets/tickMark.png" 
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const SuccessfulRegistraion = () => {
    const navigate = useNavigate()
  return (
    <>
    <Box className="congratulatios">
    <img src={congratulations}/>
    </Box>
    <Box className="successMsg">
    <img src={tickMark} width="3%" height="25%" style={{alignItems:"left"}}/> Successfully registered
    </Box>
    <Box className="startWithTodo">
        <Button variant='contained' className='dashboardButton'
        onClick={()=>navigate("/projects")}> Open Dashboard</Button>
    </Box>
    </>
  )
}

export default SuccessfulRegistraion