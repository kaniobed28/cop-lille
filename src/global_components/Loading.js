// src/loading/Loading.js
// I am not using it now anymore. I might use it later.
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loading = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
    }}
  >
    <CircularProgress size={50} color="primary" />
  </Box>
);

export default Loading;
