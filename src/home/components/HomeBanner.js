import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

function HomeBanner() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Array of banner images
  const images = [
    "images/cop.jpg",
    "images/cop-pic1.jpg", // Replace with your actual image paths
    "images/cop2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); // Change image every 15 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Images with Transition */}
      {images.map((image, index) => (
        <motion.img 
          key={index}
          src={image} 
          alt={`Banner ${index}`} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }} 
        />
      ))}
      
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
          padding: { xs: 2, md: 4 },
          color: 'white', 
          background: 'rgba(0, 0, 0, 0.5)',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* Animated Text */}
        <motion.div
          ref={ref}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
            }}
          >
            Welcome to CoP Lille
          </Typography>

          <Typography 
            variant="h5" 
            component="h2" 
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              marginBottom: 2,
            }}
          >
            Join us for Sunday Service at 01:00 PM
          </Typography>
        </motion.div>

        {/* Animated Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <motion.a 
            href="https://maps.app.goo.gl/d2a2qa6r2rWGctEK9" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }} 
            initial="hidden" 
            animate={isInView ? "visible" : "hidden"} 
            variants={buttonVariants}
          >
            <Button variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>
              Join Us
            </Button>
          </motion.a>
          <motion.div
            initial="hidden" 
            animate={isInView ? "visible" : "hidden"} 
            variants={buttonVariants}
          >
            <Link to="/about-us" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="primary" sx={{ fontWeight: 'bold' }}>
                Learn More
              </Button>
            </Link>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeBanner;
