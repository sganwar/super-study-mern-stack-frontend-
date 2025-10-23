// src/pages/DeliveryPolicy.tsx

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { AssignmentTurnedIn as DeliveryIcon, School as SchoolIcon } from '@mui/icons-material';

const DeliveryPolicy: React.FC = () => {
  return (
    <Box className="min-h-screen bg-white py-16">
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          className="font-bold text-center text-edu-primary !mb-10 !font-minimal" 
          sx={{fontSize:{xs:'2rem',md:'2.5rem'}}}
        >
          Donation Fulfillment (Delivery) Policy
        </Typography>

        <Card className="shadow-lg mb-8 p-0 md:p-16">
          <CardContent>
            <Typography variant="h5" className="font-bold !mb-2 text-edu-dark !font-body flex items-center">
              <DeliveryIcon className="mr-2 text-edu-primary" /> Nature of Service
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-4">
              The Super Study App provides a service for facilitating **charitable donations** intended for educational kits. Your donation is not for a physical product delivered to *you*, but for the charitable fulfillment of an educational kit to a needy student.
            </Typography>

            <Typography variant="h5" className="font-bold !mt-6 !mb-2 text-edu-dark !font-body flex items-center">
              <SchoolIcon className="mr-2 text-edu-primary" /> Fulfillment Process
            </Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Confirmation of Donation" 
                  secondary="Immediate: Your payment confirmation and a tax receipt will be sent to your registered email address instantly upon successful transaction."
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Educational Kit Provision" 
                  secondary="Timeline: The educational kit corresponding to your donation (₹99 per kit) will be procured and distributed to a verified needy student within 30 days of the donation."
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Impact Reporting" 
                  secondary="Updates: We are committed to transparency. Periodically, we will share updates on distribution drives and overall impact through email newsletters or our website's 'Our Impact' page."
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default DeliveryPolicy;