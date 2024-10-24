import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const Events = () => {
  // Sample event data
  const events = [
    {
      name: 'Sunday Worship Service',
      date: 'October 27, 2024',
      time: '01:00 PM',
      location: 'Main Church Hall',
      description: 'Join us for a powerful time of worship, prayer, and the Word of God.',
    },
    {
      name: 'Youth Bible Study',
      date: 'October 28, 2024',
      time: '6:00 PM',
      location: 'Youth Center',
      description: 'A special Bible study session for the youth to grow in their faith and understanding of the Scriptures.',
    },
    {
      name: 'Community Outreach Program',
      date: 'November 5, 2024',
      time: '9:00 AM',
      location: 'City Square',
      description: 'An opportunity to serve the community through food distribution, prayer, and fellowship.',
    },
  ];

  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>
        Upcoming Events
      </Typography>

      <Grid container spacing={4}>
        {events.map((event, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                  <EventIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                  {event.date} • {event.time}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  Location: {event.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
              <Box sx={{ padding: 2 }}>
                <Button variant="outlined" color="primary" fullWidth>
                  More Info
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Events;
