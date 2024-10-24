import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, backgroundColor: '#f9f9f9' }}>
      
      {/* Mission Statement */}
      <Box sx={{ marginBottom: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: 'auto' }}>
          Our mission is to spread the message of love, hope, and faith through Jesus Christ and to make a positive impact in the lives of those in our community.
        </Typography>
      </Box>

      {/* Vision Statement */}
      <Box sx={{ marginBottom: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Our Vision
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: 'auto' }}>
          Our vision is to build a loving, inclusive, and faith-centered community where people can grow spiritually, serve others, and experience the presence of God in their daily lives.
        </Typography>
      </Box>

      {/* Pastor's Message */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
          A Message from Our Pastor
        </Typography>
        
        <Grid container spacing={4} alignItems="center">
          {/* Pastor's Image */}
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Pastor's Image"
              src="https://your-pastor-image-url.com" // Replace with actual image URL
              sx={{ width: 200, height: 200, margin: 'auto' }}
            />
          </Grid>

          {/* Pastor's Message */}
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              "Welcome to our church! We are thrilled that you are interested in learning more about us. We are a community grounded in faith, dedicated to helping each other grow spiritually and to serving our neighbors with love and compassion. We hope that through our services, outreach, and ministries, you will experience the love and presence of God."
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 2, fontStyle: 'italic', fontWeight: 'bold' }}>
              - Pastor [Pastor's Name]
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Church History */}
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
          Our History
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: 'auto' }}>
          Founded in [Year], [Church Name] has been a pillar of faith in the community for over [X years]. What began as a small gathering of believers has grown into a vibrant community dedicated to worship, fellowship, and service. Through the years, we have continually expanded our ministries and outreach efforts, always striving to serve God and our neighbors with open hearts.
        </Typography>
      </Box>
      
    </Box>
  );
};

export default AboutUs;
