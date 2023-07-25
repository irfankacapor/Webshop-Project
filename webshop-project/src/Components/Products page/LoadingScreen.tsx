import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import { colours } from '../../Constants/colours';

const LoadingScreen = () => {
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
        Finding the best offers
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
