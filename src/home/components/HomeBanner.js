import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';

function HomeBanner() {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh', // Full viewport height
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <img 
        src="images/cop.jpg" 
        alt="Church Gathering" 
        style={{ 
          width: '100%', 
          height: '100%', // Full height to cover the viewport
          objectFit: 'cover', // Ensures the image covers without distortion
        }} 
      />
      
      {/* Overlay Box for Text and Buttons */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'flex-start',
          padding: { xs: 2, md: 4 }, // Responsive padding
          color: 'white', 
          background: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
          textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
        }}
      >
        {/* Church Name or Welcome Message */}
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
            fontWeight: 'bold',
          }}
        >
          Welcome to COP-Lille
        </Typography>

        {/* Subheading: Invitation or Service Info */}
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            marginBottom: 2,
          }}
        >
          Join us for Sunday Service at 10:00 AM
        </Typography>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>
            Join Us
          </Button>
          <Button variant="outlined" color="primary" sx={{ fontWeight: 'bold' }}>
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeBanner;
