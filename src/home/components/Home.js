import React from 'react';
import { Box } from '@mui/material';
import HomeBanner from './HomeBanner';
const Home = () => {
  return (
    <>
      {/* Home Banner Section */}
      <HomeBanner />

      {/* Other Sections (e.g., Sermons, Events, etc.) */}
      <Box sx={{ padding: { xs: 2, md: 4 }, backgroundColor: '#f9f9f9' }}>
        {/* Example Placeholder for Sermons */}
        <Box sx={{ marginBottom: 4 }}>
          <h2>Recent Sermons</h2>
          <p>Catch up on our latest messages of hope and inspiration.</p>
          {/* Replace with actual Sermon components or content */}
        </Box>

        {/* Example Placeholder for Events */}
        <Box sx={{ marginBottom: 4 }}>
          <h2>Upcoming Events</h2>
          <p>Join us at our next community gathering or special event.</p>
          {/* Replace with actual Events components or content */}
        </Box>

        {/* Example Placeholder for Call-to-Action */}
        <Box>
          <h2>Get Involved</h2>
          <p>Discover ways to engage and serve in our church community.</p>
          {/* Replace with actual Call-to-Action components or content */}
        </Box>
      </Box>
    </>
  );
};

export default Home;
