import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, School as SchoolIcon, MenuBook as BookIcon } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Products', path: '/products' },
  ];

  const drawer = (
    <Box
      className="navigation-drawer-section bg-edu-light h-full"
      sx={{ textAlign: 'center' }}
    >
      <Box className="flex items-center justify-between p-2 border-b border-edu-primary/20">
        <Box className="flex items-center gap-2">
          <SchoolIcon className="text-edu-primary text-3xl" />
          <Typography variant="h6" className="text-edu-primary font-bold">
            Super Study
          </Typography>
        </Box>
        <IconButton
          aria-label="close drawer"
          onClick={handleDrawerToggle}
          className="bg-transparent border border-edu-primary rounded-full p-2 hover:bg-edu-primary/10 transition-colors"
        >
          <CloseIcon fontSize="medium" className="text-edu-primary" />
        </IconButton>
      </Box>

      <List className="pt-8 !px-4">
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            className={`mb-2 rounded-lg transition-all duration-300 hover:bg-edu-secondary ${location.pathname === item.path ? 'bg-edu-primary text-white' : 'text-edu-dark bg-white bg-opacity-50'
              }`}
          >
            <ListItemText
              primary={item.text}
              className="text-center"
              primaryTypographyProps={{
                className: 'font-medium text-edu-dark'
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box className="absolute bottom-8 left-4 right-4">
        <Box className="card-edu text-center bg-[rgba(173,216,230,0.7)] bg-opacity-50">
          <BookIcon className="text-edu-primary text-4xl mb-2 animate-bounce-slow" />
          <Typography variant="body2" className="text-edu-dark">
            📚 Empowering education, one kit at a time
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        className="bg-white shadow-lg"
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}
      >
        <Toolbar className="px-4 md:px-8">
          <Box className="flex items-center gap-3">
            <Link to="/">
              <SchoolIcon fontSize='large' className="text-edu-primary text-4xl cursor-pointer" />
            </Link>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              className="text-edu-primary font-bold no-underline hover:text-edu-sky transition-colors duration-300 !font-minimal"
            >
              Super Study
            </Typography>
          </Box>

          <Box className="ml-auto">
            {!isMobile ? (
              <Box className="flex gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.text}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 no-underline font-medium ${location.pathname === item.path
                      ? 'bg-edu-primary text-white shadow-lg'
                      : 'text-edu-dark hover:bg-edu-light hover:text-edu-primary'
                      }`}
                  >
                    {item.text}
                  </Link>
                ))}
              </Box>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="!text-edu-primary !hover:bg-edu-light transition-all duration-300"
              >
                <MenuIcon fontSize='large' />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            background: 'var(--edu-light)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;