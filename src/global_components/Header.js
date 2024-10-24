import React from 'react';
import { AppBar, Toolbar, IconButton, Box, InputBase, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0, // Trigger as soon as the top is out of view
  });

  // Animation settings for hover and click effects
  const textAnimation = {
    rest: { scale: 1, color: '#ffffff', transition: { duration: 0.3 } }, // default state
    hover: { scale: 1.1, color: '#ffeb3b', transition: { duration: 0.3 } }, // hover effect
    tap: { scale: 0.9, color: '#f44336', transition: { duration: 0.2 } }, // click effect
  };

  return (
    <>
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <AppBar position="static" color="primary" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
          <Toolbar
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }, // Stack items on small screens
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 2, sm: 0 }, // Adds spacing between elements on small screens
            }}
          >
            {/* Logo and Church Name */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img
                src="images/logo-cop.gif" // Insert your image URL here
                alt="CoP Logo"
                style={{ width: 40, height: 40, marginRight: '16px' }} // Adjust image size as needed
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                Church of Pentecost
              </Typography>
            </Box>

            {/* Search Bar for Sermons/Prayers */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2,
                backgroundColor: '#f0f0f0',
                padding: '4px 8px',
                width: { xs: '100%', sm: '40%' }, // Full width on small screens
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <SearchIcon sx={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' }} />
              <InputBase
                placeholder="Search sermons, prayers"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ ml: 3, width: '100%' }}
              />
            </Box>

            {/* Contact Button */}
            <IconButton color="inherit" aria-label="contact" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ContactPhoneIcon />
            </IconButton>

            {/* Donate Button */}
            <Button
              color="secondary"
              variant="contained"
              sx={{ ml: { xs: 0, sm: 2 }, width: { xs: '100%', sm: 'auto' }, textTransform: 'none' }}
            >
              Donate
            </Button>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Bottom Navigation Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AppBar position="static" color="primary" elevation={0}>
          <Toolbar
            sx={{
              justifyContent: { xs: 'center', md: 'flex-start' }, // Center on small screens, left on larger
              overflow: 'hidden', // Prevent overflow
              whiteSpace: 'nowrap', // Keep text on one line
              flexWrap: 'nowrap', // Prevent wrapping to another line
              gap: 2,
              padding: { xs: 1, sm: 2 }, // Adjust padding based on screen size
            }}
          >
            {/* Navigation Links with Hover/Click Animation */}
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 1, sm: 2, md: 3 },
                justifyContent: { xs: 'center', md: 'flex-start' }, // Center on small screens, left on larger
              }}
            >
              {['Home', 'Sermons', 'Events', 'About Us', 'Blog', 'Contact'].map((text) => (
                <Link to={`/${text.toLowerCase().replace(/\s+/g, '-')}`} key={text} style={{ textDecoration: 'none' }}>
                  <motion.div
                    variants={textAnimation}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        color: 'white',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Reduce font size on small screens
                      }}
                    >
                      {text}
                    </Typography>
                  </motion.div>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>
    </>
  );
};

export default Header;
