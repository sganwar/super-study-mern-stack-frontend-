// src/pages/PrivacyPolicy.tsx

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
import { LockOpen as LockIcon, Policy as PolicyIcon } from '@mui/icons-material';

const PrivacyPolicy: React.FC = () => {
  return (
    <Box className="min-h-screen bg-edu-light/50 py-16">
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          className="font-bold text-center text-edu-primary !mb-10 !font-minimal" 
          sx={{fontSize:{xs:'2rem',md:'2.5rem'}}}
        >
          Privacy Policy
        </Typography>

        <Card className="shadow-lg p-0 md:p-16">
          <CardContent>
            <Typography variant="h5" className="font-bold !mb-2 text-edu-dark !font-body flex items-center">
              <PolicyIcon className="mr-2 text-edu-primary" /> 1. Data Collection
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-4">
              We collect information that you provide directly to us when you make a donation. This includes:
            </Typography>
            <List className='!p-0'>
              <ListItem className='!py-1'>
                <ListItemIcon><LockIcon className="text-edu-primary" /></ListItemIcon>
                <ListItemText primary="Personal Identification Data: Name, Email address, Phone number." />
              </ListItem>
              <ListItem className='!py-1'>
                <ListItemIcon><LockIcon className="text-edu-primary" /></ListItemIcon>
                <ListItemText primary="Transaction Data: Donation amount, time, and payment method details (processed securely by Razorpay, we do not store full card details)." />
              </ListItem>
            </List>

            <Typography variant="h5" className="font-bold !mt-6 !mb-2 text-edu-dark !font-body flex items-center">
              <PolicyIcon className="mr-2 text-edu-primary" /> 2. Use of Data
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-4">
              Your information is primarily used for the following purposes:
            </Typography>
            <List className='!p-0'>
              <ListItem className='!py-1'>
                <ListItemText primary="To process your donation and issue necessary receipts." />
              </ListItem>
              <ListItem className='!py-1'>
                <ListItemText primary="To communicate with you regarding the impact of your donation (e.g., kits distributed)." />
              </ListItem>
              <ListItem className='!py-1'>
                <ListItemText primary="To comply with legal obligations, including tax and regulatory requirements." />
              </ListItem>
            </List>

            <Typography variant="h5" className="font-bold !mt-6 !mb-2 text-edu-dark !font-body flex items-center">
              <PolicyIcon className="mr-2 text-edu-primary" /> 3. Data Security
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              We are committed to protecting the data we collect. We implement appropriate technical and organizational measures to safeguard your information against unauthorized access, disclosure, or destruction. All payment processing is handled by compliant third-party gateways (Razorpay).
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;