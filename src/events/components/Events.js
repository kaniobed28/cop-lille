import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import eventStore from '../stores/EventsStore';
import dayjs from 'dayjs';  // Assuming you're using dayjs for date formatting

const Events = observer(() => {
  useEffect(() => {
    eventStore.fetchEvents();
  }, []);

  const { events, loading } = eventStore;

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>
        Upcoming Events
      </Typography>

      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid item xs={12} md={4} key={event.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                  <EventIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                  {dayjs(event.startTime).format('MMMM DD, YYYY')} • {dayjs(event.startTime).format('hh:mm A')} - {dayjs(event.startTime).format('MMMM DD, YYYY')} • {dayjs(event.endTime).format('hh:mm A')}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  Location: {event.location} {/* Display location here */}
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
});

export default Events;