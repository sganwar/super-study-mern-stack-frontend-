// src/pages/NotFound.tsx (or src/components/NotFound.tsx)

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
} from '@mui/material';
import {
  HelpOutline as NotFoundIcon, // A question mark in a circle
  Home as HomeIcon // Icon for the home button
} from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const NotFound: React.FC = () => {
  return (
    <Box 
      className="min-h-screen bg-edu-light/50 flex items-center justify-center p-4"
      sx={{ backgroundImage: 'linear-gradient(135deg, rgba(66,165,245,0.05) 0%, rgba(255,255,255,0.05) 100%)' }} // Subtle gradient background
    >
      <Container maxWidth="sm" className="text-center">
        <Box 
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-edu-primary/10"
          sx={{ animation: 'fadeInUp 0.8s ease-out' }} // Basic CSS animation for entry
        >
          {/* Icon */}
          <NotFoundIcon 
            className="text-edu-primary !text-8xl md:!text-9xl mb-6" 
            sx={{ animation: 'bounce 2s infinite' }} // Subtle bouncing animation for the icon
          />

          {/* 404 Text */}
          <Typography 
            variant="h1" 
            className="font-bold text-edu-dark !font-minimal !mb-4"
            sx={{fontSize:{xs:'3rem',sm:'4rem',md:'5rem'}}}
          >
            404
          </Typography>

          {/* Main Message */}
          <Typography 
            variant="h5" 
            className="font-bold text-edu-primary !font-body !mb-4"
            sx={{fontSize:{xs:'1.5rem',md:'1.8rem'}}}
          >
            Page Not Found
          </Typography>

          {/* Sub Message */}
          <Typography variant="body1" className="text-gray-600 leading-relaxed !mb-8">
            Oops! It looks like the page you are looking for doesn't exist or has been moved. Don't worry, you can always go back to our homepage.
          </Typography>

          {/* Home Button */}
          {/* Assuming you have 'react-router-dom' and a route named '/' for your homepage */}
          <Button 
            component={Link} // Use Link component for React Router
            to="/" 
            variant="contained" 
            size="large"
            className="!bg-edu-secondary hover:!bg-edu-primary !text-white !font-body !font-bold !rounded-full !py-3 !px-8 transition-all duration-300 transform hover:-translate-y-1"
            startIcon={<HomeIcon />}
          >
            Go to Homepage
          </Button>
        </Box>
      </Container>

      {/* Basic CSS Animations (You would place this in your global CSS or a styled component if preferred) */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </Box>
  );
};

export default NotFound;