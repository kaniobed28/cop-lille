// src/components/ProductGrid.js
import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite'; // Import observer
import { itemStore } from '../global_stores/ItemsStore'; // Ensure the path is correct
import ProductCard from './Products_Card';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductGrid = observer(() => {
  useEffect(() => {
    itemStore.fetchItems(); // Fetch items when the component mounts
  }, []);

  return (
    <Grid container spacing={3}>
      {itemStore.items.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Grid>
  );
});

const ProductItem = ({ product }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // This will animate every time it comes into view
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, inView]);

  return (
    <Grid item xs={12} sm={6} md={3}>
      <motion.div
        ref={ref} // Attach the ref to track visibility
        initial={{ opacity: 0, y: 20 }} // Initial state of the product card (fade in and slide up)
        animate={controls} // Controls the animation
        transition={{ duration: 0.3, delay: 0.1 * product.id }} // Adjust duration and delay for staggered animation
      >
        <ProductCard
          name={product.itemName} // Use the correct field names
          price={product.itemPrice}
          image={product.itemImageUrl}
          soldOut={false} // If you have a soldOut field, adjust this
        />
      </motion.div>
    </Grid>
  );
};

export default ProductGrid;
