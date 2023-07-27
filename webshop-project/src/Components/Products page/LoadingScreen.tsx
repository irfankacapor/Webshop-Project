import { CircularProgress, Box, Typography } from "@mui/material";
import { colours } from "../../Constants/colours";

const LoadingScreen = ({ text }: { text: string }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
      <Typography variant="h5" marginTop={2} color={colours.mediumdarkgrey}>
        {text}
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
