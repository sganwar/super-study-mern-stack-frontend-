// src/pages/Products.tsx - FINAL OPTIMIZED VERSION

import React, { useState, useCallback, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Rating,
  IconButton,
  Chip,
  Fade,
  CircularProgress // 🎯 NEW IMPORT: For the spinner
} from '@mui/material';
import {
  Download as DownloadIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Star as StarIcon,
  Storage as StorageIcon,
  Category as CategoryIcon
} from '@mui/icons-material';

// --- DATA DEFINITIONS (UNCHANGED) ---
const PRODUCTS = [
  {
    id: 1,
    name: 'Super I',
    category: 'Educational',
    description: 'Transform learning into an adventure with interactive lessons, gamified challenges, and personalized education paths that adapt to every student\'s pace.',
    downloads: '1k+',
    rating: 4.9,
    size: '209 MB',
    ageRating: '3+',
    icon: '/super-i-app-icon.jpg',
    video: 'https://www.youtube.com/embed/dsXjd6drQlQ',
    screenshots: [
      '/super-i-app-ss-1.webp',
      '/super-i-app-ss-2.webp',
      '/super-i-app-ss-3.webp',
      '/super-i-app-ss-4.webp',
    ],
    productLink: 'https://play.google.com/store/apps/details?id=com.superchild.sc365'
  },
  {
    id: 2,
    name: 'Super Gold',
    category: 'Casual Gaming',
    description: 'Dive into an exciting world of fortune and fun! Collect gold, unlock rewards, and experience thrilling gameplay with stunning visuals and smooth mechanics.',
    downloads: '100+',
    rating: 5.0,
    size: '171 MB',
    ageRating: '3+',
    icon: '/super-gold-app-icon.png',
    screenshots: [
      '/super-gold-app-ss-1.webp',
      '/super-gold-app-ss-2.webp',
      '/super-gold-app-ss-3.webp',
      '/super-gold-app-ss-4.webp',
    ],
    productLink: 'https://play.google.com/store/apps/details?id=com.superbillionaire.game'
  }
];

// --- MOBILE FRAME COMPONENT ---
// const MobileFrame = React.memo(({ media, isVideo = false, loadedImages, onLoaded, isLoading }: { 
const MobileFrame = React.memo(({ media, loadedImages, onLoaded, isLoading }: { 
  media: string; 
  isVideo?: boolean; 
  loadedImages: Record<string, boolean>;
  onLoaded: (src: string) => void; 
  isLoading: boolean;
}) => {
  const handleImageLoad = useCallback(() => {
    // Only mark as loaded if it hasn't been marked yet
    if (!loadedImages[media]) {
      onLoaded(media);
    }
  }, [media, onLoaded, loadedImages]);
  
  // Determine if we should show the foreground image
  const isMediaReady = loadedImages[media]; 
  
  // Use local state and effect to manage the smooth opacity transition once media is ready
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isMediaReady) {
      // Fade in smoothly once ready
      const timer = setTimeout(() => setShowContent(true), 10);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [media, isMediaReady]);


  return (
    <Box className="relative mx-auto" sx={{ width: { xs: 250, md: 300 }, height: { xs: 500, md: 600 } }}>


       {/* Power Button - Right Side (Centered on the 14px border) */}
      <Box 
          className="absolute right-0 top-[25%] w-[5px] h-10 rounded-sm bg-gray-500/80"
          sx={{ right: '-3.5px' }} 
      />
      
      {/* Volume Up Button - Left Side */}
      <Box 
          className="absolute left-0 top-[40%] w-[5px] h-10 rounded-sm bg-gray-500/80"
          sx={{ left: '-3.5px' }}
      />
      
      {/* Volume Down Button - Left Side */}
      <Box 
          className="absolute left-0 top-[55%] w-[5px] h-10 rounded-sm bg-gray-500/80"
          sx={{ left: '-3.5px' }}
      />

      <Box
        className="relative w-full h-full rounded-[3rem] border-[14px] border-gray-800 shadow-2xl overflow-hidden bg-black"
      >
        {/* Notch */}
        <Box 
            // The notch container, starting at the top of the screen/bezel edge
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"
        >
            <Box className="absolute inset-0 flex items-center justify-center gap-2">
                {/* Speaker/Receiver Slot (White) */}
                <Box className="w-8 h-[3px] bg-white rounded-full" />
                {/* Front Camera Lens (White) */}
                <Box className="w-[6px] h-[6px] bg-white rounded-full border border-gray-400" />
            </Box>
        </Box>
        
        {/* Screen Content */}
        <Box className="w-full h-full overflow-hidden bg-white relative">

          {/* 🎯 CHANGE: Implement CircularProgress Spinner 🎯 */}
          {(isLoading || !isMediaReady) && (
            <Box 
              className="absolute inset-0 bg-gray-100 flex items-center justify-center"
              sx={{ zIndex: 5 }} // Ensure spinner is above blurred background
            >
              <CircularProgress size={40} className="text-edu-primary" />
            </Box>
          )}
          {/* END CHANGE */}

          {/* Background blur image (Always present for smooth transition) */}
          <img
            src={media}
            alt="App Screenshot Background"
            className="object-cover blur-sm opacity-50 absolute inset-0 w-full h-full"
          />
          
          {/* Foreground image - Fades in when ready */}
          <img
            src={media}
            alt="App Screenshot"
            // Use local state for the smooth opacity transition
            className={`object-cover absolute inset-0 w-full h-full transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
          />
        </Box>
      </Box>
      
      {/* Reflection (UNCHANGED) */}
      <Box
        className="absolute -bottom-4 left-0 right-0 h-24 opacity-20"
        sx={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)',
          filter: 'blur(10px)'
        }}
      />
    </Box>
  );
});

// --- APP SHOWCASE COMPONENT ---
const AppShowcase = ({ app, index }: { app: typeof PRODUCTS[0]; index: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [isLoadingTransition, setIsLoadingTransition] = useState(false); 

  const handleLoaded = useCallback((src: string) => {
    // Mark as loaded globally
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
    // If the currently viewed image is loaded, stop the transition state
    if (app.screenshots[currentIndex] === src) {
      setIsLoadingTransition(false); 
    }
  }, [app.screenshots, currentIndex]);

  // Effect to preload all images and check cache status on component mount
  useEffect(() => {
    app.screenshots.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      
      // 🎯 OPTIMIZATION: Check if the image is already cached (img.complete)
      if (img.complete) {
        setLoadedImages((prev) => ({ ...prev, [src]: true }));
      }
      
      // The onload still ensures images not in cache get marked when done
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [src]: true }));
      };
    });

    // Initial transition state: Start loading for the very first image
    setIsLoadingTransition(true); 

    // Fail-safe: Stop loading state after a timeout if `onLoad` doesn't fire fast enough
    const timer = setTimeout(() => {
        setIsLoadingTransition(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [app.screenshots]);


  // Effect to manage loading state when index changes
  useEffect(() => {
    const currentMediaSrc = app.screenshots[currentIndex];
    
    // 1. If the target image is ALREADY loaded, turn off transition immediately.
    if (loadedImages[currentMediaSrc]) {
      setIsLoadingTransition(false);
    } else {
      // 2. If it's NOT loaded, turn on transition state and wait for handleLoaded to turn it off.
      setIsLoadingTransition(true);
    }
    
    // Fallback timer just in case onLoad doesn't fire (e.g., failed to load)
    const timer = setTimeout(() => {
        setIsLoadingTransition(false);
    }, 1000); 
    return () => clearTimeout(timer);

  }, [currentIndex, app.screenshots, loadedImages]);


  const totalSlides = app.screenshots.length;

  const handleNavigation = (newIndex: number) => {
    // Always start transition state to cover the few milliseconds between clicks
    setIsLoadingTransition(true); 
    setCurrentIndex(newIndex);
  };
  
  const getCurrentMedia = () => {
    return { media: app.screenshots[currentIndex], isVideo: false };
  };

  const { media, isVideo } = getCurrentMedia();
  const isReverse = index % 2 !== 0;

  return (
    <Box
      className="py-16"
      sx={{
        background: index % 2 === 0
          ? 'linear-gradient(135deg, rgba(223, 199, 199, 0.9) 0%, #fff 100%)'
          : 'linear-gradient(135deg, #9e9544ff 0%, #fff 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Box
          className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
        >
          {/* Mobile Frame Section */}
          <Box className="flex-1 flex flex-col items-center">
            <Box className="relative">
              {/* Key forces component reset on media change */}
              <MobileFrame 
                key={media} 
                media={media} 
                isVideo={isVideo} 
                loadedImages={loadedImages} 
                onLoaded={handleLoaded}
                isLoading={isLoadingTransition} 
              />
              
              {/* Navigation Buttons */}
              <Box className="flex justify-center gap-4 !mt-2">
                <IconButton
                  onClick={() => handleNavigation((currentIndex - 1 + totalSlides) % totalSlides)}
                  className="!bg-edu-primary !text-white hover:!bg-edu-dark shadow-lg"
                  size="large"
                >
                  <ArrowBackIcon />
                </IconButton>
                
                <Box className="flex items-center gap-2">
                  {Array.from({ length: totalSlides }).map((_, idx) => (
                    <Box
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex ? 'bg-edu-primary w-8' : 'bg-gray-500'
                      }`}
                      onClick={() => handleNavigation(idx)}
                      sx={{ cursor: 'pointer' }}
                    />
                  ))}
                </Box>
                
                <IconButton
                  onClick={() => handleNavigation((currentIndex + 1) % totalSlides)}
                  className="!bg-edu-primary !text-white hover:!bg-edu-dark shadow-lg"
                  size="large"
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>

            </Box>
          </Box>

          {/* Info Section (UNCHANGED) */}
          <Box className="flex-1">
            <Box className="flex items-center gap-4 mb-4">
              <img
                src={app.icon}
                alt={app.name}
                className="rounded-2xl shadow-lg"
                style={{ width: 80, height: 80, objectFit: 'cover' }}
              />
              <Box>
                <Typography variant="h3" className="font-bold text-edu-dark !font-minimal" sx={{fontSize:{xs:'2.2rem',md:'3rem'}}}>
                  {app.name}
                </Typography>
                <Chip
                  icon={<CategoryIcon />}
                  label={app.category}
                  className="mt-2 bg-edu-light !text-edu-primary"
                />
              </Box>
            </Box>

            <Typography variant="body1" className="text-gray-700 !mb-6 leading-relaxed text-lg">
              {app.description}
            </Typography>

            <Box className="grid grid-cols-2 gap-4 mb-6">
              <Box className="bg-white rounded-xl p-4 shadow-md">
                <Box className="flex items-center gap-2 mb-2">
                  <DownloadIcon className="text-edu-primary" />
                  <Typography variant="caption" className="text-gray-500">Downloads</Typography>
                </Box>
                <Typography variant="h5" className="font-bold text-edu-dark">
                  {app.downloads}
                </Typography>
              </Box>

              <Box className="bg-white rounded-xl p-4 shadow-md">
                <Box className="flex items-center gap-2 mb-2">
                  <StarIcon className="text-edu-warning" />
                  <Typography variant="caption" className="text-gray-500">Rating</Typography>
                </Box>
                <Box className="flex items-center gap-2">
                  <Typography variant="h5" className="font-bold text-edu-dark">
                    {app.rating}
                  </Typography>
                  <Rating value={app.rating} precision={0.1} size="small" readOnly />
                </Box>
              </Box>

              <Box className="bg-white rounded-xl p-4 shadow-md">
                <Box className="flex items-center gap-2 mb-2">
                  <StorageIcon className="text-edu-accent" />
                  <Typography variant="caption" className="text-gray-500">Size</Typography>
                </Box>
                <Typography variant="h5" className="font-bold text-edu-dark">
                  {app.size}
                </Typography>
              </Box>

              <Box className="bg-white rounded-xl p-4 shadow-md">
                <Typography variant="caption" className="text-gray-500 mb-2 block">Age Rating</Typography>
                <Typography variant="h5" className="font-bold text-edu-dark">
                  {app.ageRating}
                </Typography>
              </Box>
            </Box>

            <Button
              onClick={() => window.open(app.productLink, '_blank')}
              variant="contained"
              size="large"
              fullWidth
              startIcon={<DownloadIcon />}
              className="bg-edu-primary hover:bg-edu-dark text-white py-4 rounded-xl shadow-lg text-lg font-bold"
              sx={{ textTransform: 'none' }}
            >
              Download from Play Store
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- MAIN PRODUCTS PAGE COMPONENT (UNCHANGED) ---
const Products: React.FC = () => {
  // Preload ALL screenshots from ALL products once when the Products page mounts
  useEffect(() => {
    const allScreenshots = PRODUCTS.flatMap(p => p.screenshots);
    allScreenshots.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []); 




    return (
    <>
    <p className='text-center py-5 my-5 font-mono'>coming soon</p>
    </>
  )

  return (
    <>
      <Box className="min-h-screen bg-white">
        
        {/* Hero Banner with Screenshots Grid (UNCHANGED) */}
        <Box className="relative overflow-hidden bg-edu-gradient py-20">
          <Container maxWidth="lg" className="relative z-10">
           <Fade in={true} timeout={1500}>
             <Box className="text-center space-y-4 flex flex-col items-center">
            <Typography
              variant="h2"
              className="text-white font-bold !font-display"
              sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
            >
              Our Mobile Applications
            </Typography>
            <Typography variant="h6" className="text-white/90 max-w-2xl mx-auto !font-body">
              Discover innovative apps from the house of Super Child
            </Typography>
            </Box>
          </Fade>
          </Container>

          {/* Floating Screenshots Background (UNCHANGED) */}
          <Box className="absolute inset-0 opacity-10 overflow-hidden">
            {[...PRODUCTS[0].screenshots.slice(0, 3), ...PRODUCTS[1].screenshots.slice(0, 3)].map((img, idx) => (
              <Box
                key={idx}
                className="absolute"
                sx={{
                  width: { xs: 100, md: 150 },
                  height: { xs: 200, md: 300 },
                  transform: `rotate(${idx * 15 - 30}deg)`,
                  left: `${idx * 15}%`,
                  top: `${idx % 2 === 0 ? '10%' : '60%'}`,
                }}
              >
                <img
                  src={img}
                  alt="Screenshot"
                  className="object-cover rounded-2xl absolute inset-0 w-full h-full"
                />
              </Box>
            ))}
          </Box>
        </Box>
        
        {/* App Showcases */}
        {PRODUCTS.map((app, index) => (
          <AppShowcase key={app.id} app={app} index={index} />
        ))}
        
      </Box>
    </>
  );
};

export default Products;