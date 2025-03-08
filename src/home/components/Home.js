import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import HomeBanner from './HomeBanner';

const Home = () => {
  // Animation pour les sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Hook pour détecter quand chaque section entre dans la vue
  const [sermonsRef, sermonsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [eventsRef, eventsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Données fictives pour rendre le contenu dynamique
  const sermons = [
    { title: 'L’Espoir en Christ', date: '2 Mars 2025', link: '/sermons/espoir' },
    { title: 'La Puissance de la Prière', date: '23 Février 2025', link: '/sermons/priere' },
  ];

  const events = [
    { title: 'Culte Spécial Pâques', date: '20 Avril 2025', link: '/events/paques' },
    { title: 'Soirée de Louange', date: '15 Mars 2025', link: '/events/louange' },
  ];

  return (
    <>
      {/* Section Bannière */}
      <HomeBanner />

      {/* Contenu Principal */}
      <Box
        sx={{
          padding: { xs: 3, md: 6 },
          background: 'linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%)', // Dégradé subtil
          minHeight: '100vh',
        }}
      >
        {/* Section Sermons Récents */}
        <motion.div
          ref={sermonsRef}
          variants={sectionVariants}
          initial="hidden"
          animate={sermonsInView ? 'visible' : 'hidden'}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: '#1976d2', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}
            >
              Sermons Récents
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', maxWidth: '600px', mx: 'auto' }}>
              Retrouvez nos derniers messages d’espoir et d’inspiration pour nourrir votre foi.
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {sermons.map((sermon, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-5px)' },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                      {sermon.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#777' }}>
                      {sermon.date}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button component={Link} to={sermon.link} size="small" color="primary">
                      Écouter
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Section Événements à Venir */}
        <motion.div
          ref={eventsRef}
          variants={sectionVariants}
          initial="hidden"
          animate={eventsInView ? 'visible' : 'hidden'}
          sx={{ mt: 8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: '#1976d2', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}
            >
              Événements à Venir
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', maxWidth: '600px', mx: 'auto' }}>
              Participez à nos prochaines rencontres communautaires ou événements spéciaux.
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {events.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-5px)' },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                      {event.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#777' }}>
                      {event.date}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button component={Link} to={event.link} size="small" color="primary">
                      En savoir plus
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Section Appel à l’Action */}
        <motion.div
          ref={ctaRef}
          variants={sectionVariants}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          sx={{ mt: 8, textAlign: 'center' }}
        >
          <Box
            sx={{
              backgroundColor: '#1976d2',
              color: '#fff',
              py: 6,
              px: { xs: 3, md: 6 },
              borderRadius: 3,
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}
            >
              Impliquez-vous
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
              Découvrez comment vous pouvez participer et servir au sein de notre communauté
              ecclésiale.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/get-involved"
              sx={{
                backgroundColor: '#ffca28',
                color: '#1976d2',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: 25,
                '&:hover': { backgroundColor: '#ffb300' },
              }}
            >
              Participer
            </Button>
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default Home;