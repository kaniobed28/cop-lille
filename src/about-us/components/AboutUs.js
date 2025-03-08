import React from 'react';
import { Box, Typography, Grid, Avatar, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  // Animation pour les sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Hooks useInView avec des valeurs par défaut sécurisées
  const [missionRef, missionInView = false] = useInView({ threshold: 0.2, triggerOnce: true }) || [];
  const [visionRef, visionInView = false] = useInView({ threshold: 0.2, triggerOnce: true }) || [];
  const [pastorRef, pastorInView = false] = useInView({ threshold: 0.2, triggerOnce: true }) || [];
  const [historyRef, historyInView = false] = useInView({ threshold: 0.2, triggerOnce: true }) || [];

  return (
    <Box
      sx={{
        padding: { xs: 3, md: 6 },
        background: 'linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Mission */}
      <motion.div
        ref={missionRef}
        variants={sectionVariants}
        initial="hidden"
        animate={missionInView ? 'visible' : 'hidden'}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#1976d2',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Notre Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              color: '#555',
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            Notre mission est de répandre le message d’amour, d’espoir et de foi à travers Jésus-Christ
            et d’avoir un impact positif dans la vie des membres de notre communauté.
          </Typography>
        </Box>
      </motion.div>

      {/* Vision */}
      <motion.div
        ref={visionRef}
        variants={sectionVariants}
        initial="hidden"
        animate={visionInView ? 'visible' : 'hidden'}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#1976d2',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Notre Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              color: '#555',
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            Notre vision est de bâtir une communauté aimante, inclusive et centrée sur la foi, où chacun
            peut grandir spirituellement, servir les autres et ressentir la présence de Dieu au quotidien.
          </Typography>
        </Box>
      </motion.div>

      {/* Message du Pasteur */}
      <motion.div
        ref={pastorRef}
        variants={sectionVariants}
        initial="hidden"
        animate={pastorInView ? 'visible' : 'hidden'}
      >
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#1976d2',
              mb: 4,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Message de Notre Pasteur
          </Typography>
          <Card
            sx={{
              maxWidth: '1000px',
              mx: 'auto',
              borderRadius: 3,
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              backgroundColor: '#fff',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              {/* Image du Pasteur */}
              <Grid item xs={12} md={4}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Avatar
                    alt="Pasteur"
                    src="https://images.unsplash.com/photo-1599566150163-29194dca5116?q=80&w=1887&auto=format&fit=crop"
                    sx={{
                      width: { xs: 150, md: 250 },
                      height: { xs: 150, md: 250 },
                      border: '4px solid #ffca28',
                      mx: 'auto',
                    }}
                  />
                </motion.div>
              </Grid>

              {/* Message */}
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{ color: '#333', fontSize: { xs: '1rem', md: '1.125rem' }, mb: 2 }}
                  >
                    "Bienvenue dans notre église ! Nous sommes ravis que vous souhaitiez en savoir plus sur
                    nous. Nous formons une communauté ancrée dans la foi, dédiée à aider chacun à grandir
                    spirituellement et à servir nos voisins avec amour et compassion. Nous espérons que
                    nos cultes, nos actions et nos ministères vous permettront de ressentir l’amour et la
                    présence de Dieu."
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      color: '#1976d2',
                      textAlign: 'right',
                    }}
                  >
                    - Pasteur [Nom du Pasteur]
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </motion.div>

      {/* Historique */}
      <motion.div
        ref={historyRef}
        variants={sectionVariants}
        initial="hidden"
        animate={historyInView ? 'visible' : 'hidden'}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#1976d2',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Notre Histoire
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              color: '#555',
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            Fondée en [Année], l’Église [Nom de l’Église] est un pilier de foi dans la communauté depuis
            plus de [X ans]. Ce qui a commencé comme un petit rassemblement de croyants s’est
            transformé en une communauté vibrante dédiée à l’adoration, à la fraternité et au service.
            Au fil des années, nous avons élargi nos ministères et nos efforts d’entraide, toujours avec
            le désir de servir Dieu et nos voisins avec des cœurs ouverts.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AboutUs;