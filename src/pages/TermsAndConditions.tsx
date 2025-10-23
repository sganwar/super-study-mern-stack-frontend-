// src/pages/TermsAndConditions.tsx

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircleOutline as CheckIcon, Gavel as GavelIcon } from '@mui/icons-material';

const TermsAndConditions: React.FC = () => {
  return (
    <Box className="min-h-screen bg-white py-16">
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          className="font-bold text-center text-edu-primary !mb-10 !font-minimal" 
          sx={{fontSize:{xs:'2rem',md:'2.5rem'}}}
        >
          Terms of Service
        </Typography>

        <Card className="shadow-lg mb-8 p-0 md:p-16">
          <CardContent>
            <Typography variant="h5" className="font-bold !mb-2 text-edu-dark !font-body flex items-center">
              <GavelIcon className="mr-2 text-edu-primary" /> 1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-4">
              By accessing or using the Super Study App and its services, including making donations, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
            </Typography>

            <Typography variant="h5" className="font-bold !mt-6 !mb-2 text-edu-dark !font-body flex items-center">
              <GavelIcon className="mr-2 text-edu-primary" /> 2. Donation & Purpose
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><CheckIcon className="text-edu-primary" /></ListItemIcon>
                <ListItemText primary="Donation Amount: Each donation of ₹99 (or multiples thereof) contributes to the provision of one complete education kit for a needy student." />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon className="text-edu-primary" /></ListItemIcon>
                <ListItemText primary="Nature of Payment: All payments made through the App are non-refundable charitable donations for the specified purpose, not a purchase of goods or services." />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon className="text-edu-primary" /></ListItemIcon>
                <ListItemText primary="Kit Contents: The Super Study App reserves the right to slightly adjust the contents of the education kit based on availability and the specific needs of the beneficiaries, while maintaining its core educational value." />
              </ListItem>
            </List>
            
            <Typography variant="h5" className="font-bold !mt-6 !mb-2 text-edu-dark !font-body flex items-center">
              <GavelIcon className="mr-2 text-edu-primary" /> 3. User Obligations
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              You agree to provide accurate, current, and complete information during the donation process and to comply with all applicable laws and regulations.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;