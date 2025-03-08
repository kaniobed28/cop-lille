import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  InputBase,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme, isDark }) => ({
  background: isDark
    ? 'linear-gradient(135deg, #1e1e1e 30%, #424242 90%)'
    : 'linear-gradient(135deg, #1976d2 30%, #42a5f5 90%)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'background 0.3s ease',
}));

const Header = () => {
  const [isDark, setIsDark] = useState(false); // Dark mode state
  const [drawerOpen, setDrawerOpen] = useState(false); // Mobile menu state
  const { ref, inView } = useInView({ threshold: 0 });

  // Animation variants
  const textAnimation = {
    rest: { scale: 1, y: 0, color: isDark ? '#e0e0e0' : '#ffffff', transition: { duration: 0.3, ease: 'easeOut' } },
    hover: { scale: 1.05, y: -3, color: '#ffca28', transition: { duration: 0.3, ease: 'easeOut' } },
    tap: { scale: 0.95, y: 1, color: '#ffffff', transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const bannerAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  // Navigation items
  const navItems = ['Home', 'Sermons', 'Events', 'About Us', 'Blog', 'Contact'];

  // Toggle dark mode
  const handleDarkModeToggle = () => setIsDark(!isDark);

  // Toggle mobile drawer
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      {/* Announcement Banner */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bannerAnimation}
        sx={{ backgroundColor: isDark ? '#424242' : '#ffca28', py: 1, textAlign: 'center' }}
      >
        <Typography
          variant="body2"
          sx={{ color: isDark ? '#e0e0e0' : '#1976d2', fontWeight: 'bold' }}
        >
          Join us this Sunday for a special sermon at 13h!
        </Typography>
      </motion.div>

      {/* Top Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: inView ? 1 : 0.9, y: inView ? 0 : -60 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <StyledAppBar position="sticky" isDark={isDark}>
          <Toolbar
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 2, sm: 1 },
              py: { xs: 1.5, sm: 1 },
            }}
          >
            {/* Logo and Church Name */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <motion.img
                src="images/logo-cop.gif"
                alt="Church of Pentecost Logo"
                style={{ width: 48, height: 48, marginRight: '12px' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                aria-label="Church logo"
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.25rem', sm: '1.75rem' },
                  letterSpacing: '0.5px',
                  color: isDark ? '#e0e0e0' : '#fff',
                }}
              >
                Church of Pentecost
              </Typography>
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: 25,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(5px)',
                width: { xs: '100%', sm: '35%', md: '40%' },
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                '&:hover': { backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.25)' },
              }}
            >
              <SearchIcon sx={{ ml: 2, color: isDark ? '#e0e0e0' : '#fff' }} />
              <InputBase
                placeholder="Search sermons, prayers..."
                sx={{
                  ml: 1,
                  width: '100%',
                  color: isDark ? '#e0e0e0' : '#fff',
                  '&::placeholder': { color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.7)' },
                }}
                inputProps={{ 'aria-label': 'Search sermons and prayers' }}
              />
            </Box>

            {/* Actions: Contact, Donate, Dark Mode */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
              <IconButton
                sx={{ display: { xs: 'none', sm: 'flex' }, color: isDark ? '#e0e0e0' : '#fff' }}
                aria-label="Contact us"
              >
                <ContactPhoneIcon />
              </IconButton>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 20,
                  backgroundColor: '#ffca28',
                  color: '#1976d2',
                  fontWeight: 'bold',
                  px: 3,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#ffb300' },
                }}
                aria-label="Donate to the church"
              >
                Donate
              </Button>
              <Switch
                checked={isDark}
                onChange={handleDarkModeToggle}
                sx={{ ml: 1 }}
                inputProps={{ 'aria-label': 'Toggle dark mode' }}
              />
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{ display: { xs: 'flex', sm: 'none' }, color: isDark ? '#e0e0e0' : '#fff' }}
              onClick={toggleDrawer(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </StyledAppBar>
      </motion.div>

      {/* Bottom Navigation Bar (Desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <StyledAppBar position="static" isDark={isDark}>
          <Toolbar sx={{ justifyContent: 'flex-start', gap: { xs: 1.5, sm: 3 }, py: 1 }}>
            <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 3 } }}>
              {navItems.map((text) => (
                <Link
                  to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                  key={text}
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div
                    variants={textAnimation}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: isDark ? '#e0e0e0' : '#fff',
                        fontSize: { xs: '0.85rem', sm: '1rem' },
                        letterSpacing: '0.5px',
                      }}
                    >
                      {text}
                    </Typography>
                  </motion.div>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </StyledAppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: isDark ? '#1e1e1e' : '#1976d2',
            height: '100%',
            color: isDark ? '#e0e0e0' : '#fff',
          }}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ ml: 'auto', display: 'block', color: isDark ? '#e0e0e0' : '#fff' }}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((text) => (
              <ListItem
                key={text}
                component={Link}
                to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={toggleDrawer(false)}
                sx={{ '&:hover': { backgroundColor: isDark ? '#424242' : '#42a5f5' } }}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontWeight: 600, color: isDark ? '#e0e0e0' : '#fff' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;