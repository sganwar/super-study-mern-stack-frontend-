// src/pages/ContactUs.tsx

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  Help as HelpIcon 
} from '@mui/icons-material';

const ContactUs: React.FC = () => {
  return (
    <Box className="min-h-screen bg-white py-16">
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          className="font-bold text-center text-edu-primary !mb-10 !font-minimal" 
          sx={{fontSize:{xs:'2rem',md:'2.5rem'}}}
        >
          Get In Touch
        </Typography>
        
        <Box className="text-center mb-12">
            <Typography variant="h6" className="text-gray-700 leading-relaxed !font-body">
                We're here to answer any questions about your donation, our mission, or support for needy students.
            </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Email Card */}
          <Grid size={{xs: 12, md: 6}}>
            <Card className="h-full hover:shadow-xl transition-all duration-300 bg-edu-light">
              <CardContent className="text-center p-8">
                <Box className="w-16 h-16 mx-auto mb-4 rounded-full bg-edu-primary/10 flex items-center justify-center text-edu-primary">
                  <EmailIcon className="text-3xl" />
                </Box>
                <Typography variant="h6" className="font-bold mb-2 text-edu-dark">
                  Email Support
                </Typography>
                <Typography variant="body1" className="text-gray-700 font-bold">
                  supergoldapp@gmail.com
                </Typography>
                <Typography variant="body2" className="text-gray-600 mt-1">
                  (Best for all queries, including refund requests)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Phone Card */}
          <Grid size={{xs: 12, md: 6}}>
            <Card className="h-full hover:shadow-xl transition-all duration-300 bg-edu-light">
              <CardContent className="text-center p-8">
                <Box className="w-16 h-16 mx-auto mb-4 rounded-full bg-edu-primary/10 flex items-center justify-center text-edu-primary">
                  <PhoneIcon className="text-3xl" />
                </Box>
                <Typography variant="h6" className="font-bold mb-2 text-edu-dark">
                  Helpline
                </Typography>
                <Typography variant="body1" className="text-gray-700 font-bold">
                  +91 74838 94715
                </Typography>
                <Typography variant="body2" className="text-gray-600 mt-1">
                  (Available Mon-Fri, 10 AM - 5 PM IST And Sat, 10 AM - 12 PM IST)

                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Address Card (Mandatory for compliance) */}
          {/* <Grid size={{xs: 12, md: 4}}>
            <Card className="h-full hover:shadow-xl transition-all duration-300 bg-edu-light">
              <CardContent className="text-center p-8">
                <Box className="w-16 h-16 mx-auto mb-4 rounded-full bg-edu-primary/10 flex items-center justify-center text-edu-primary">
                  <LocationIcon className="text-3xl" />
                </Box>
                <Typography variant="h6" className="font-bold mb-2 text-edu-dark">
                  Registered Address
                </Typography>
                <Typography variant="body2" className="text-gray-700">
                  Super Study Foundation,<br/>
                  #101, Education Tower, MG Road,<br/>
                  Bengaluru, Karnataka, 560001
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>

        <Box className="mt-12 text-center p-8 bg-edu-sky/20 rounded-xl">
            <Typography variant="h6" className="font-bold text-edu-dark !font-body flex items-center justify-center">
              <HelpIcon fontSize='large' className="mr-2 text-edu-primary" /> Urgent Payment Queries
            </Typography>
            <Typography variant="body1" className="text-gray-700 mt-2">
                For mistaken payment refund requests, please email us within **24 hours** of the transaction with all details.
            </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;