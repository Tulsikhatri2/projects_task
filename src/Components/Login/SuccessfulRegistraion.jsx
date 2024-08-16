import React from 'react'
import congratulations from "../../Assets/success.jpg"
import tickMark from "../../Assets/tickMark.png" 
import { Box, Button } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogged } from '../../Redux/ProjectsCRUD/Dashboard/dashboardSlice'

const SuccessfulRegistraion = () => {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleDashboard = () => {
      dispatch(userLogged(true))
    }
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
        onClick={()=>handleDashboard()}> Open Dashboard</Button>
    </Box>
    </>
  )
}

export default SuccessfulRegistraion