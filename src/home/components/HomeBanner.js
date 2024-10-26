import * as React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

function HomeBanner() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const images = [
    "images/cop.jpg",
    "images/cop-pic1.jpg",
    "images/cop2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleNext = React.useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    const interval = setInterval(handleNext, 15000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
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

      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: { xs: 2, md: 4 }, color: 'white', background: 'rgba(0, 0, 0, 0.5)', textAlign: 'center' }}>
        <motion.div ref={ref} variants={textVariants} initial="hidden" animate={hasAnimated ? "visible" : "hidden"}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold', mb: 2 }}>
            Welcome to CoP Lille
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, mb: 4 }}>
            Join us for Sunday Service at 01:00 PM
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <motion.a
            href="https://maps.app.goo.gl/d2a2qa6r2rWGctEK9"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={buttonVariants}
          >
            <Button variant="contained" color="primary" sx={{ fontWeight: 'bold', px: 4, py: 2 }}>
              Join Us
            </Button>
          </motion.a>
          <motion.div initial="hidden" animate={hasAnimated ? "visible" : "hidden"} variants={buttonVariants}>
            <Link to="/about-us" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="primary" sx={{ fontWeight: 'bold', px: 4, py: 2 }}>
                Learn More
              </Button>
            </Link>
          </motion.div>
        </Box>
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: 'black',
          border: '2px solid white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            transform: 'translateY(-50%) scale(1.1)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <ArrowBackIos fontSize="large" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: 'black',
          border: '2px solid white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            transform: 'translateY(-50%) scale(1.1)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <ArrowForwardIos fontSize="large" />
      </IconButton>

      <Box sx={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1 }}>
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              backgroundColor: currentImageIndex === index ? 'white' : 'gray',
              transition: 'background-color 0.3s',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: currentImageIndex === index ? 'white' : 'lightgray',
              },
            }}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default HomeBanner;
