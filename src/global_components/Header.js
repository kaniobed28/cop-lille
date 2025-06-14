import React, { useState, useEffect } from 'react';
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
  MenuItem,
  Select,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const StyledAppBar = styled(AppBar)(({ theme, isDark }) => ({
  background: isDark
    ? 'linear-gradient(135deg, #1e1e1e 30%, #424242 90%)'
    : 'linear-gradient(135deg, #1976d2 30%, #42a5f5 90%)',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  transition: 'background 0.3s ease',
}));

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'en');
  const { ref, inView } = useInView({ threshold: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const textAnimation = {
    rest: { scale: 1, y: 0, color: isDark ? '#e0e0e0' : '#ffffff', transition: { duration: 0.3 } },
    hover: { scale: 1.1, y: -4, color: '#ffca28', transition: { duration: 0.3 } },
    tap: { scale: 0.9, y: 2, color: '#ffffff', transition: { duration: 0.2 } },
  };

  const bannerAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const navItems = [
    t('home'),
    t('sermons'),
    t('events'),
    t('about'),
    t('blog'),
    t('contact'),
    t('media'),
  ];

  const handleDarkModeToggle = () => setIsDark(!isDark);
  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const handleLanguageChange = (event) => setLanguage(event.target.value);

  // Map language codes to display names
  const languageDisplayNames = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bannerAnimation}
        sx={{
          backgroundColor: isDark ? '#424242' : '#ffca28',
          py: 1.5,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: isDark ? '#e0e0e0' : '#1976d2',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
        >
          {t('join_message')}
        </Typography>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: inView ? 1 : 0.9, y: inView ? 0 : -60 }}
        transition={{ duration: 0.4 }}
      >
        <StyledAppBar position="sticky" isDark={isDark}>
          <Toolbar
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 2, sm: 1 },
              py: { xs: 2, sm: 1.5 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <motion.img
                src="images/tlcc-logo.jpg"
                alt="Church of Pentecost Logo"
                style={{ width: 64, height: 64, marginRight: '16px' }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.3 }}
                aria-label="Church logo"
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', sm: '2.5rem' },
                  letterSpacing: '0.75px',
                  color: isDark ? '#e0e0e0' : '#fff',
                }}
              >
                The Lille City Church
              </Typography>
            </Box>

            <Box
              sx={{
                position: 'relative',
                borderRadius: 30,
                backgroundColor: isDark
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(5px)',
                width: { xs: '100%', sm: '40%', md: '45%' },
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'rgba(255, 255, 255, 0.25)',
                },
              }}
            >
              <SearchIcon
                sx={{
                  ml: 2,
                  color: isDark ? '#e0e0e0' : '#fff',
                  fontSize: '1.5rem',
                }}
              />
              <InputBase
                placeholder="Search sermons, prayers..."
                sx={{
                  ml: 1,
                  width: '100%',
                  color: isDark ? '#e0e0e0' : '#fff',
                  fontSize: '1.1rem',
                  '&::placeholder': {
                    color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                  },
                }}
                inputProps={{ 'aria-label': 'Search sermons and prayers' }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: { xs: 1.5, sm: 2.5 },
              }}
            >
              <Select
                value={language}
                onChange={handleLanguageChange}
                displayEmpty
                renderValue={(value) => languageDisplayNames[value] || 'Select Language'}
                sx={{
                  color: isDark ? '#e0e0e0' : '#fff',
                  '.MuiSvgIcon-root': { color: isDark ? '#e0e0e0' : '#fff' },
                  fontSize: '0.9rem',
                }}
                aria-label="Select language"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="fr">Français</MenuItem>
                <MenuItem value="es">Español</MenuItem>
              </Select>

              <IconButton
                sx={{ color: isDark ? '#e0e0e0' : '#fff', fontSize: '1.5rem' }}
                aria-label="Contact us"
              >
                <ContactPhoneIcon fontSize="inherit" />
              </IconButton>

              <Button
                variant="contained"
                sx={{
                  borderRadius: 25,
                  backgroundColor: '#ffca28',
                  color: '#1976d2',
                  fontWeight: 'bold',
                  px: 4,
                  fontSize: '1.1rem',
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

            <IconButton
              sx={{
                display: { xs: 'flex', sm: 'none' },
                color: isDark ? '#e0e0e0' : '#fff',
                fontSize: '1.5rem',
              }}
              onClick={toggleDrawer(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
          </Toolbar>
        </StyledAppBar>
      </motion.div>

      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <StyledAppBar position="static" isDark={isDark}>
            <Toolbar sx={{ justifyContent: 'flex-start', gap: { xs: 2, sm: 4 }, py: 1.5 }}>
              <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4 } }}>
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
                          fontSize: { xs: '1rem', sm: '1.2rem' },
                          letterSpacing: '0.75px',
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
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 280,
            backgroundColor: isDark ? '#1e1e1e' : '#1976d2',
            height: '100%',
            color: isDark ? '#e0e0e0' : '#fff',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ color: isDark ? '#e0e0e0' : '#fff' }}
              aria-label="Close navigation menu"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Language Selector */}
          <Box sx={{ mb: 2, px: 2 }}>
            <Select
              value={language}
              onChange={handleLanguageChange}
              displayEmpty
              renderValue={(value) => languageDisplayNames[value] || 'Select Language'}
              sx={{
                color: isDark ? '#e0e0e0' : '#fff',
                '.MuiSvgIcon-root': { color: isDark ? '#e0e0e0' : '#fff' },
                fontSize: '0.9rem',
                width: '100%',
              }}
              aria-label="Select language"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">Français</MenuItem>
              <MenuItem value="es">Español</MenuItem>
            </Select>
          </Box>

          <List sx={{ flexGrow: 1 }}>
            {navItems.map((text) => (
              <ListItem
                key={text}
                component={Link}
                to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={toggleDrawer(false)}
                sx={{
                  '&:hover': {
                    backgroundColor: isDark ? '#424242' : '#42a5f5',
                  },
                }}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: isDark ? '#e0e0e0' : '#fff',
                    fontSize: '1.1rem',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default React.memo(Header);