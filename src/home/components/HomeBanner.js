import * as React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

function HomeBanner() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Liste des images pour le carrousel
  const images = [
    "images/cop.jpg",
    "images/cop-pic1.jpg",
    "images/cop2.jpg",
  ];

  // Variants pour les animations
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  // Gestion de l'animation au premier affichage
  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Gestion du carrousel
  const handleNext = React.useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Rotation automatique des images
  React.useEffect(() => {
    const interval = setInterval(handleNext, 8000); // Réduit à 8s pour plus de dynamisme
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000', // Fond noir pour un meilleur contraste
      }}
    >
      {/* Carrousel d'images avec effet de zoom */}
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Bannière ${index + 1}`}
          initial={{ scale: 1.1 }}
          animate={{
            scale: currentImageIndex === index ? 1 : 1.1,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      ))}

      {/* Overlay avec contenu */}
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
          alignItems: 'center',
          padding: { xs: 2, md: 6 },
          color: '#fff',
          background: 'rgba(0, 0, 0, 0.6)', // Overlay plus sombre pour lisibilité
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <motion.div ref={ref} variants={textVariants} initial="hidden" animate={hasAnimated ? 'visible' : 'hidden'}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              letterSpacing: '1px',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)', // Ombre pour lisibilité
            }}
          >
            Bienvenue à The Lille City Church
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.75rem' },
              mt: 2,
              mb: 4,
              fontWeight: 300,
            }}
          >
            Rejoignez-nous pour le culte du dimanche à 13h00
          </Typography>
        </motion.div>

        {/* Boutons avec animations */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <motion.a
            href="https://maps.app.goo.gl/d2a2qa6r2rWGctEK9"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            variants={buttonVariants}
            initial="hidden"
            animate={hasAnimated ? 'visible' : 'hidden'}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1976d2',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: 25,
                '&:hover': { backgroundColor: '#1565c0' },
              }}
            >
              Nous rejoindre
            </Button>
          </motion.a>
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={hasAnimated ? 'visible' : 'hidden'}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="/about-us" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  borderRadius: 25,
                  '&:hover': { borderColor: '#ffca28', color: '#ffca28' },
                }}
              >
                En savoir plus
              </Button>
            </Link>
          </motion.div>
        </Box>
      </Box>

      {/* Boutons de navigation */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          color: '#1976d2',
          borderRadius: '50%',
          p: 1.5,
          zIndex: 2,
          '&:hover': { backgroundColor: '#fff', transform: 'translateY(-50%) scale(1.1)' },
          transition: 'all 0.3s ease',
        }}
        aria-label="Image précédente"
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          color: '#1976d2',
          borderRadius: '50%',
          p: 1.5,
          zIndex: 2,
          '&:hover': { backgroundColor: '#fff', transform: 'translateY(-50%) scale(1.1)' },
          transition: 'all 0.3s ease',
        }}
        aria-label="Image suivante"
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Indicateurs de carrousel */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1.5,
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            whileHover={{ scale: 1.2 }}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: currentImageIndex === index ? '#ffca28' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default HomeBanner;