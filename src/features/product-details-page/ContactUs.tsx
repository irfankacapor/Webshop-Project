import { Box, Typography, Stack, Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import styled from "styled-components";
import { colours } from "@/utils/colours";

export const ContactButton = styled(({ ...props }) => (
  <Button
    variant="text"
    size="medium"
    sx={{ marginLeft: props.marginleft }}
    {...props}
  />
))`
  box-sizing: border-box !important;
  text-transform: none !important;
  font-weight: 300 !important;
  color: ${colours.grey} !important;
  padding: 8px 10px !important;
  border-radius: 5px !important;
`;

const ContactUs = () => (
  <Box marginTop="2rem">
    <Typography variant="body1">Need support?</Typography>
    <Stack display="flex" flexDirection="row" marginTop="0.25rem">
      <ContactButton startIcon={<LocalPhoneIcon />}>
        Contact sales
      </ContactButton>
      <ContactButton startIcon={<EmailRoundedIcon />} marginleft="1rem">
        Email us
      </ContactButton>
    </Stack>
  </Box>
);

export default ContactUs;
