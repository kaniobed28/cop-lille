// src/components/ProductCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Chip } from '@mui/material';

const ProductCard = ({ name, price, image, soldOut }) => (
  <Card
    sx={{
      flex: '1 1 auto', // Allow the card to grow and shrink to fill available space
      borderRadius: 3,
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.2s',
      backgroundColor: 'white',
      '&:hover': { transform: 'scale(1.03)' },
    }}
  >
    <Box sx={{ position: 'relative', height: '180px' }}>
      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt={name}
        sx={{ borderRadius: '3px', objectFit: 'cover' }}
      />
      {soldOut && (
        <Chip
          label="SOLD OUT"
          color="error"
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            fontWeight: 'bold',
            fontSize: '12px',
            padding: '5px 10px',
          }}
        />
      )}
    </Box>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '8px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'green', margin: '4px 0' }}>
          Gh₵{price}
        </Typography>
        {soldOut && (
          <Typography variant="body2" color="error">
            This item is no longer available.
          </Typography>
        )}
      </Box>
      <Button
        variant="contained"
        color={soldOut ? 'secondary' : 'primary'}
        disabled={soldOut}
        fullWidth
        sx={{
          padding: '10px 0',
          textTransform: 'none',
          fontWeight: 'bold',
        }}
      >
        {soldOut ? 'Unavailable' : 'Buy Now'}
      </Button>
    </CardContent>
  </Card>
);

export default ProductCard;
