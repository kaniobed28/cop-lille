import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      title: 'The Power of Prayer',
      author: 'Pastor John Doe',
      date: 'October 20, 2024',
      excerpt: 'Prayer is a powerful tool that can transform lives. Discover how you can deepen your connection with God through prayer.',
    },
    {
      title: 'Faith and Hope in Difficult Times',
      author: 'Pastor Jane Smith',
      date: 'October 15, 2024',
      excerpt: 'In challenging seasons, it can be hard to keep the faith. Learn how to stay grounded in hope and trust in God’s plan.',
    },
    {
      title: 'Serving the Community with Love',
      author: 'Deacon Mark Lee',
      date: 'October 10, 2024',
      excerpt: 'As followers of Christ, we are called to serve others with love. Explore ways to make a meaningful impact in your community.',
    },
  ];

  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>
        Our Blog
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                  {post.author} • {post.date}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  {post.excerpt}
                </Typography>
              </CardContent>
              <Box sx={{ padding: 2 }}>
                <Button variant="outlined" color="primary" fullWidth>
                  Read More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
