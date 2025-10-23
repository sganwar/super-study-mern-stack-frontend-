// src/pages/CancellationAndRefunds.tsx

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
import { MoneyOff as NoRefundIcon } from '@mui/icons-material';

const CancellationAndRefunds: React.FC = () => {
  return (
    <Box className="min-h-screen bg-edu-light/50 py-16">
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          className="font-bold text-center text-edu-primary !mb-10 !font-minimal" 
          sx={{fontSize:{xs:'2rem',md:'2.5rem'}}}
        >
          Cancellation & Refund Policy
        </Typography>

        <Card className="shadow-lg p-0 md:p-16">
          <CardContent>
            <Box className="bg-edu-primary/10 p-4 rounded-lg mb-6 text-center">
                <NoRefundIcon fontSize='large' className="text-6xl text-edu-primary mb-2" />
                <Typography variant="h5" className="font-bold text-edu-dark !font-minimal">
                    ALL DONATIONS ARE FINAL.
                </Typography>
            </Box>

            <Typography variant="h5" className="font-bold !mb-2 text-edu-dark !font-body flex items-center">
              1. No Cancellation and No Refund Policy
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-4">
              Since all transactions made through the Super Study App are **charitable donations** intended for the immediate provision of educational kits (₹99 per kit), we operate a **strict No Cancellation and No Refund Policy**.
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Once a donation transaction is completed, the funds are immediately allocated towards the procurement of educational materials, and therefore, cannot be cancelled or refunded." />
              </ListItem>
              <ListItem>
                <ListItemText primary="This policy ensures that the charitable work for needy students can proceed without interruption or financial delay." />
              </ListItem>
            </List>

            <Typography variant="h5" className="font-bold !mt-6 !mb-2 text-edu-dark !font-body flex items-center">
               2. Mistaken Payment Exception
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-4">
              The only potential exception is in the case of a genuine and verifiable **mistake in payment** (e.g., accidental duplicate transaction).
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="If you believe a payment was made by genuine mistake, you must **Contact Us** immediately (within 24 hours of the transaction) providing all transaction details and a clear explanation of the error." />
              </ListItem>
              <ListItem>
                <ListItemText primary="All refund requests, even for mistakes, will be subject to a thorough review by our administration team. The Super Study App holds the final decision on whether a refund is warranted." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default CancellationAndRefunds;