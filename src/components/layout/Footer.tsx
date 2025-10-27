import React from 'react';
import { Box, Typography, Container, Stack, IconButton,Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { 
  School as SchoolIcon, 
  Code as CodeIcon, 
  Instagram, 
  YouTube 
} from '@mui/icons-material';

// Tailwind color constants matching the Super Study dark mode theme
const EDU_ACCENT_COLOR = 'rgb(96, 165, 250)'; // blue-400
const EDU_BACKGROUND_COLOR = 'rgb(17, 24, 39)'; // gray-900

const Footer: React.FC = () => {

  return (
    <Box 
      component="footer" 
      // Apply dark background and a prominent blue accent border (increased size for emphasis)
      className="bg-gray-900 text-white mt-auto border-t-4 border-[#5f5f5f]" 
      sx={{ backgroundColor: EDU_BACKGROUND_COLOR }}
    >
      <Container maxWidth="lg" className="py-6"> {/* Increased vertical padding for better spacing */}
        {/* Main Footer Content Row */}
        <Box className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
  
  {/* 1. Brand Section (Takes up designated space) */}
  <Box className="flex-1 min-w-0 lg:max-w-xs">
    <Box className="flex items-center gap-3 mb-4">
      <SchoolIcon fontSize='large' className="text-4xl text-edu-primary" />
      <Typography variant="h5" className="font-extrabold text-white tracking-wider">
        Super Study
      </Typography>
    </Box>
    <Typography variant="body2" className="text-gray-300 leading-relaxed !mb-6"> 
      Empowering education through generous donations - one kit at a time. Join our community and support our mission.
    </Typography>
    
    {/* Social Links */}
    <Box className="flex gap-4">
      <IconButton 
        size="large" 
        className="hover:!bg-gray-700 !bg-[#E1306C]/60 !text-white transform hover:scale-110 transition-transform" 
        href="https://www.instagram.com/"
        target="_blank"
      >
        <Instagram fontSize="medium" />
      </IconButton>
      <IconButton 
        size="large" 
        className="hover:!bg-gray-700 !bg-red-500 !text-white transform hover:scale-110 transition-transform" 
        href="https://www.youtube.com/@superc_"
        target="_blank"
      >
        <YouTube fontSize="medium" />
      </IconButton>
    </Box>
  </Box>

  {/* 2. Quick Links & Policies & Apps */}
  <Box className="flex flex-col md:flex-row justify-between w-full lg:w-auto lg:flex-row !gap-8 lg:gap-16"> 
    
    {/* Quick Links */}
    <Stack spacing={0.3} className="min-w-24">
      <Typography variant="h6" className="!font-light text-white text-sm border-b border-blue-400/50 pb-0">
        Quick Links
      </Typography>
      <Link component={RouterLink} to={"/"} className="text-gray-300 hover:text-blue-400 transition-colors text-sm" underline="none" color="inherit">
        Home
      </Link>
      <Link component={RouterLink} to={"/about"} className="text-gray-300 hover:text-blue-400 transition-colors text-sm" underline="none" color="inherit">
        About
      </Link>
      <Link component={RouterLink} to={"/products"} className="text-gray-300 hover:text-blue-400 transition-colors text-sm" underline="none" color="inherit">
        Apps / Products
      </Link>
    </Stack>

    {/* Policies Section */}
    <Stack spacing={0.3} className="min-w-28">
      <Typography variant="h6" className="!font-light text-white text-sm border-b border-blue-400/50 pb-0">
        Policies
      </Typography>
      <Link component={RouterLink} to={"/terms-and-conditions"} className="text-gray-300 hover:text-blue-400 transition-colors text-sm" underline="none" color="inherit">
        Terms & Conditions
      </Link>
      <Link component={RouterLink} to={"/privacy-policy"} className="text-gray-300 hover:text-blue-400 transition-colors text-sm" underline="none" color="inherit">
        Privacy Policy
      </Link>
      <Link component={RouterLink} to={"/shipping-policy"} className="text-gray-300 hover:text-blue-400 transition-colors text-sm" underline="none" color="inherit">
        Shipping / Delivery Policy
      </Link>
      <Link component={RouterLink} to={"/cancellation-and-refunds"} className="text-gray-300 hover:text-blue-400 transition-colors text-sm" underline="none" color="inherit">
        Cancellation & Refund
      </Link>
      <Link component={RouterLink} to={"/contact-us"} className="text-gray-300 hover:text-blue-400 transition-colors text-sm" underline="none" color="inherit">
        Contact Us
      </Link>
    </Stack>

    {/* Apps Section */}
    <Stack spacing={0.3} className="min-w-28">
      <Typography variant="h6" className="!font-light text-white text-sm border-b border-blue-400/50 pb-0">
        Our Apps
      </Typography>
      <Link
        href="https://play.google.com/store/apps/details?id=com.superchild.sc365&pcampaignid=web_share"
        target="_blank"
        className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
        underline="none" color="inherit"
      >
        Super Intelligent App
      </Link>
      <Link
        href="https://play.google.com/store/apps/details?id=com.superbillionaire.game"
        target="_blank"
        className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
        underline="none" color="inherit"
      >
        Super Gold App
      </Link>
    </Stack>
  </Box>

  {/* 3. Developer Credit */}
  <Box className="lg:mt-0 mt-8 flex lg:justify-end justify-start w-full lg:flex-1 lg:max-w-48">
    <Box className="bg-gray-800 rounded-xl p-1 w-full max-w-56 shadow-2xl border border-blue-500/30">
      <Box className="flex items-center gap-2 mb-2">
        <CodeIcon sx={{ color: EDU_ACCENT_COLOR }} className="text-xl" />
        <Typography variant="body2" className="text-white tracking-wide">
          Developed By
        </Typography>
      </Box>
      <Link
        href="https://www.instagram.com/mohammed_anwar_abbas"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all text-base font-semibold shadow-md mt-1"
        underline="none" color="inherit"
      >
        Anwar
      </Link>
    </Box>
  </Box>
</Box>

        {/* 4. Bottom Bar (Copyright) */}
        <Box className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <Typography variant="body2" className="text-gray-400">
            © 2025 Super Study. All rights reserved.
          </Typography>
          
          <Typography variant="body2" className="text-gray-400 text-center">
            Designed for Accessible Education
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
