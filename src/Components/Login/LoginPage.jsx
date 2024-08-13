  import React from "react";
  import { Box, TextField, Button} from "@mui/material";
  import { PiListPlusFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

  const LoginPage = () => {
    return (
      <>
        <Box className="loginScreen">
          <Box className="loginBox">
            <Box className="logoBox">
              <span><PiListPlusFill style={{ fontSize: "5vh" }} /></span>
              <span>TodoTask</span>
            </Box>
            <Box className="loginDetailBox">
              <TextField label="Email" className="login" size="small" color="secondary"/><br/>
              <TextField label="Password" className="login" size="small" color="secondary" sx={{marginTop:"-2vh" }}/>
              <Button variant="contained" className="loginButton" sx={{marginTop:"3vh", fontFamily:"system-ui"}}>Login</Button>
            </Box>
            <Box className="loginOptions">
              <p style={{marginTop:"1vh"}}>Login With</p>
              <Box className="loginOtherOptions">
                <Box className="loginOptionsStyle">
                <AiOutlineGoogle />
                </Box>
                <Box className="loginOptionsStyle">
                <FaFacebook />
                </Box>
                <Box className="loginOptionsStyle">
                <FaTwitter />
                </Box>
              </Box>
              <p>Not a user? <span className="register"><u>Register Now</u></span> </p>
            </Box>
          </Box>
        </Box>
      </>
    );
  };

  export default LoginPage;
