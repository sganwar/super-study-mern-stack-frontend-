// src/components/About.tsx (or src/pages/About.tsx)

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid, // MUI Grid component
  Card,
  CardContent,
}
// NOTE: MUI v5/v6 uses the size prop directly on the <Grid> component.
// The code below uses the required object syntax for sizing: size={{xs: 12, md: 6}}
from '@mui/material';
import {
  MenuBook as BookIcon,
  Create as PencilIcon,
  School as BagIcon,
} from '@mui/icons-material';

// --- DATA DEFINITIONS (UNCHANGED) ---
const kitItems = [
  { icon: <BookIcon className="text-4xl" />, name: 'Textbooks & Notebooks', desc: 'Quality learning materials' },
  { icon: <PencilIcon className="text-4xl" />, name: 'Stationery Items', desc: 'Pens, pencils & essentials' },
  { icon: <BagIcon className="text-4xl" />, name: 'Courses', desc: 'awareness related classes/courses' },
];

const impactStats = [
  { number: '500+', label: 'Kits Distributed', color: 'bg-edu-primary' },
  { number: '₹99', label: 'Per Kit Cost', color: 'bg-edu-secondary' },
  { number: '50+', label: 'Schools Covered', color: 'bg-edu-accent' },
  { number: '95%', label: 'Success Rate', color: 'bg-edu-success' },
];

const regions = [
  'Karnataka - Rural Districts',
  'Underprivileged Urban Areas',
  'Tribal Community Schools',
  'Government Schools'
];

// --- REACT COMPONENT ---
const About: React.FC = () => {
  // All Next.js imports and logic have been removed.
  
  return (
    <>
      <Box className="min-h-screen bg-white">
        {/* Mission Section with Image */}
        <Container maxWidth="lg" className="py-16">
          <Grid container spacing={6} alignItems="center">
            {/* CORRECTED Grid Item: Using size prop with object syntax */}
            <Grid size={{xs: 12, md: 6}}> 
              <Typography variant="h3" className="font-bold text-edu-primary !mb-4 !font-display text-center md:text-left">
                Our Mission
              </Typography>
              <Typography variant="h6" className="text-gray-700 leading-relaxed !mb-4 text-center md:text-left !font-body">
                Empowering underprivileged students with quality education kits to bridge the learning gap and create equal opportunities for all children.
              </Typography>
              <Typography variant="body1" className="text-gray-600 leading-relaxed">
                Every child deserves access to quality education materials. Through your generous donations, 
                we provide comprehensive education kits to students who cannot afford basic school supplies.
              </Typography>
            </Grid>
            {/* CORRECTED Grid Item: Using size prop with object syntax */}
            <Grid size={{xs: 12, md: 6}}> 
              <Box className="relative h-96">
                {/* Replaced Next.js <Image> with standard <img> */}
                <img
                  src="/online-test.svg"
                  alt="Students studying"
                  className="w-full h-full object-contain"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* --- Start Wave divider --- */}
        <Box className="relative hw-full z-10">
          <svg 
            className="w-full h-auto block" 
            style={{ height: '80px' }} 
            preserveAspectRatio="none" 
            viewBox="0 0 1440 100" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path 
              fill="rgba(66,165,245,0.4)" 
              d="M0,50 C240,10 480,0 720,20 C960,40 1200,90 1440,70 L1440,100 L0,100 Z"
            ></path>
          </svg>
        </Box>
        {/* --- End Wave divider --- */}

        {/* What's in the Kit */}
        <Box className="bg-gradient-to-b from-edu-sky/40 to-white py-16">
          <Container maxWidth="lg">
            <Typography variant="h3" className="font-bold text-center text-edu-primary !mb-12 !font-minimal" sx={{fontSize:{xs:'2rem',md:'2.8rem'}}}>
              What&apos;s Inside an Education Kit?
            </Typography>
            <Grid container spacing={4}>
              {kitItems.map((item, idx) => (
                <Grid size={{xs: 12, md: 4}} key={idx}> {/* CORRECTED Grid Item */}
                  <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="text-center p-8">
                      <Box className="w-20 h-20 mx-auto mb-4 rounded-full bg-edu-light flex items-center justify-center text-edu-primary">
                        {item.icon}
                      </Box>
                      <Typography variant="h6" className="font-bold mb-2 text-edu-dark">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Impact Section with Image */}
        <Container maxWidth="lg" className="py-16">
          <Grid container spacing={6} alignItems="center">
            {/* CORRECTED Grid Item */}
            <Grid size={{xs: 12, md: 6}}> 
              {/* Replaced Next.js <Image> with standard <img> */}
              <Box className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/poor-kids.webp"
                  alt="students"
                  className="w-full h-full object-cover"
                />
              </Box>
            </Grid>
            {/* CORRECTED Grid Item */}
            <Grid size={{xs: 12, md: 6}}>
              <Typography variant="h3" className="font-bold text-edu-primary !mb-6 text-center md:text-left !font-minimal" sx={{fontSize:{xs:'2rem',md:'2.8rem'}}}>
                Our Impact
              </Typography>
              <Grid container spacing={3}>
                {impactStats.map((stat, idx) => (
                  <Grid size={{xs: 6}} key={idx}> {/* CORRECTED Grid Item */}
                    <Box className={`${stat.color} text-white p-6 rounded-xl text-center shadow-lg`}>
                      <Typography variant="h4" className="font-bold mb-2">
                        {stat.number}
                      </Typography>
                      <Typography variant="body2">{stat.label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>

        {/* Regions We Serve */}
        <Box className="bg-gradient-to-br from-edu-primary to-edu-sky py-16 text-white">
          <Container maxWidth="lg">
            <Typography variant="h3" className="font-bold text-center !mb-12 !font-minimal" sx={{fontSize:{xs:'2rem',md:'2.8rem'}}}>
              Regions We Serve
            </Typography>
            <Grid container spacing={{xs:2,md:4}} className='items-center'>
              {regions.map((region, idx) => (
                <Grid size={{xs: 12, sm: 6, md: 3}} key={idx}> {/* CORRECTED Grid Item */}
                  <Box className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all">
                    <Typography variant="h6" className="font-semibold">
                      {region}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Call to Action */}
        <Box className="bg-gradient-to-r from-edu-secondary to-edu-warning py-16 text-white">
          <Container maxWidth="md" className="text-center">
            <Typography variant="h3" className="font-bold !mb-6 !font-minimal" sx={{fontSize:{xs:'2rem',md:'2.8rem'}}}>
              Make a Difference Today
            </Typography>
            <Typography variant="h6" className="!mb-8 leading-relaxed !font-body">
              Your ₹99 donation provides a complete education kit that empowers a child to learn, 
              grow, and build a brighter future. Join us in transforming lives through education.
            </Typography>
            <Box className="flex flex-wrap justify-center gap-6 text-2xl font-bold">
              <span>📚</span>
              <span>✏️</span>
              <span>🎒</span>
              <span>📖</span>
              <span>🎓</span>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default About;