import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, CardActions, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Données des articles de blog
  const blogPosts = [
    {
      title: 'La Puissance de la Prière',
      author: 'Pasteur John Doe',
      date: '20 Octobre 2024',
      excerpt: 'La prière est un outil puissant qui peut transformer des vies. Découvrez comment approfondir votre connexion avec Dieu.',
      image: 'https://images.unsplash.com/photo-1508672019048-805c376b5579?q=80&w=1932&auto=format&fit=crop',
      slug: 'puissance-priere',
    },
    {
      title: 'Foi et Espoir en Temps Difficiles',
      author: 'Pasteur Jane Smith',
      date: '15 Octobre 2024',
      excerpt: 'Dans les moments difficiles, garder la foi peut être un défi. Apprenez à rester ancré dans l’espoir et la confiance en Dieu.',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef0ebf6?q=80&w=1935&auto=format&fit=crop',
      slug: 'foi-espoir',
    },
    {
      title: 'Servir la Communauté avec Amour',
      author: 'Diacre Mark Lee',
      date: '10 Octobre 2024',
      excerpt: 'En tant que disciples du Christ, nous sommes appelés à servir avec amour. Explorez des façons d’avoir un impact significatif.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
      slug: 'servir-communaute',
    },
  ];

  // Animation pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 }, // Effet décalé pour chaque carte
    },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  // Hook useInView pour la section entière
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Box
      sx={{
        padding: { xs: 3, md: 6 },
        background: 'linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Titre principal */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: '#1976d2',
          textAlign: 'center',
          mb: 6,
          fontSize: { xs: '2rem', md: '2.5rem' },
        }}
      >
        Notre Blog
      </Typography>

      {/* Grille des articles */}
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={cardVariants} whileHover="hover">
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                  }}
                >
                  {/* Image de l'article */}
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                    sx={{ objectFit: 'cover' }}
                  />

                  {/* Contenu de l'article */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: '#333', mb: 1 }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {post.author} • {post.date}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555' }}>
                      {post.excerpt}
                    </Typography>
                  </CardContent>

                  {/* Bouton d'action */}
                  <CardActions sx={{ p: 2 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      component={Link}
                      to={`/blog/${post.slug}`}
                      sx={{
                        borderRadius: 20,
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': { borderColor: '#ffca28', color: '#ffca28' },
                      }}
                    >
                      Lire la suite
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Blog;