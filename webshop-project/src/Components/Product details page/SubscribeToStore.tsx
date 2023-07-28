import { Box, Button, TextField, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styled from "styled-components";
import { colours } from "../../Constants/colours";

const StyledSubscribeField = styled(({...props}) => (<TextField variant="outlined" placeholder="Enter your email" fullWidth {...props}/>))`
    background-color: ${colours.white} !important;
    max-width: 400px;
    & fieldset {
        border-radius: 5px 0px 0px 5px !important;
        border: 1px 0px 1px 1px !important;
    }
  `

const StyledNotificationsButton = styled(NotificationsNoneIcon)`
  margin-left: 0.5rem; 
  color: white !important;
`

const SubscribeButton = styled(({...props}) => (<Button variant="container" size="large" endIcon={<StyledNotificationsButton/>} {...props}/>))`
  transition-duration: 250ms !important;
    background-color: ${colours.blue} !important;
    color: ${colours.white} !important;
    padding: 10px 22px !important;
    border-radius: 0 5px 5px 0 !important;
    cursor: pointer !important;
    height: 56px;
    min-width: 64px;
    text-transform: none !important;
    font-weight: 300 !important;
    :hover{
        box-shadow: rgba(140, 152, 164, 0.176) 0px 10px 40px 10px !important;
    }
`

const StyledSubscribeTitle = styled(({...props}) => (<Typography variant="h4" align="center" {...props}/>))`
    color: ${colours.title};
    font-weight: 600 !important;
    font-size: 1.5625rem !important;
    @media (min-width: 600px){
      font-size: 1.8219rem !important;
    }
    @media (min-width: 900px){
      font-size: 2.0243rem !important;
    }
`

const SubscribeToStore = () => {
  return (
    <Box display="flex" justifyContent="center" alignContent="center" flexDirection="column">
      <Box marginBottom="2rem" textAlign="center">
        <Typography
          variant="caption"
          color={colours.grey}
          align="center"
          gutterBottom
          fontWeight={600}
        >
          SUBSCRIBE
        </Typography>
        <StyledSubscribeTitle>
          Get the latest from our store
        </StyledSubscribeTitle>
      </Box>
      <Box display="flex" alignItems="flex-start" justifyContent="center">
        <StyledSubscribeField />
        <SubscribeButton>Subscribe</SubscribeButton>
      </Box>
    </Box>
  );
};

export default SubscribeToStore;
