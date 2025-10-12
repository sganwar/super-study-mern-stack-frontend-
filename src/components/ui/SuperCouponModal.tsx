import React, { useState, useEffect, memo } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Button,
  Fade,
  Zoom
} from '@mui/material';
import {
  Close as CloseIcon,
  ContentCopy as CopyIcon,
  CelebrationOutlined as CelebrationIcon,
  StarOutlined as StarIcon
} from '@mui/icons-material';

interface SuperCouponModalProps {
  open: boolean;
  onClose: () => void;
  couponCode: string;
  treeCount: number;
  paymentId?: string;
}

const SuperCouponModal: React.FC<SuperCouponModalProps> = memo(({
  open,
  onClose,
  couponCode,
  treeCount,
  paymentId
}) => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShowCelebration(true), 500);
    } else {
      setShowCelebration(false);
    }
  }, [open]);


  // useeffect for making body hidden when this model opens, as document.body.style.overflow="hiddent" wont work directly.
  useEffect(() => {
  let scrollY = 0;
  if (open) {
    scrollY = window.scrollY || window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
  } else {
    // restore
    const top = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    document.body.style.width = '';
    if (top) {
      const restoreY = -parseInt(top || '0', 10);
      window.scrollTo(0, restoreY);
    }
  }
  return () => {
    // cleanup in case component unmounts while open
    const top = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    document.body.style.width = '';
    if (top) {
      const restoreY = -parseInt(top || '0', 10);
      window.scrollTo(0, restoreY);
    }
  };
}, [open]);

  const handleCopy = async () => {
    try {
       if (navigator.clipboard && window.isSecureContext) {
      // Modern method (works on most browsers)
      await navigator.clipboard.writeText(couponCode);
    } else {
      // Fallback for mobile browsers or non-HTTPS
      const textArea = document.createElement('textarea');
      textArea.value = couponCode;
      textArea.style.position = 'fixed'; // prevent scrolling to bottom on iOS
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const generateSparkles = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <Box
        key={i}
        className="absolute animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 100}ms`,
          animationDuration: `${2 + Math.random()}s`
        }}
      >
        <StarIcon
          className="text-yellow-400 opacity-70"
          style={{ fontSize: Math.random() * 20 + 10 }}
        />
      </Box>
    ));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'transparent',
          boxShadow: 'none',
          overflow: 'visible',
          maxHeight: { xs: '90vh', sm: '90vh' },
          margin: { xs: 1, sm: 3 }
        }
      }}
    >
      <DialogContent className="p-0 relative" sx={{ p: { xs: 2, sm: 0 } }}>
        {/* Celebration Animation Background */}
        <Box className="absolute inset-0 pointer-events-none overflow-hidden">
          {showCelebration && generateSparkles()}
        </Box>

        {/* Close Button */}
        <Box className="absolute top-2 right-2 z-50" sx={{ top: { xs: 8, sm: 8 }, right: { xs: 8, sm: 8 } }}>
          <IconButton
            onClick={onClose}
            className="bg-white shadow-lg"
            sx={{
              backgroundColor: 'white',
              color: '#2856acff',
              padding:'0.1rem',
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            <CloseIcon sx={{fontSize:{xs:'1.8rem',md:'2.2rem'}}}/>
          </IconButton>
        </Box>

        {/* Celebration Header */}
        <Zoom in={showCelebration} timeout={800}>
          <Box className="text-center mb-4" sx={{ mb: { xs: 2, sm: 2 }, pt: { xs: 3, sm: 3 } }}>
            <CelebrationIcon
              className="text-4xl text-yellow-500 animate-bounce mb-2"
              sx={{ fontSize: { xs: '3rem', sm: '4rem' } }}
            />
            <Typography variant="h5" className="text-white font-bold" sx={{ fontSize: { xs: '1.3rem', sm: '2rem' } }}>
              🎉 Payment Successful! 🎉
            </Typography>
            <Typography variant="body1" className="text-white opacity-90" sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
              Thank you for donating {treeCount} educational kit{treeCount > 1 ? 's' : ''}!
            </Typography>
          </Box>
        </Zoom>

        {/* Golden Ticket */}
        <Fade in={showCelebration} timeout={1200}>
          <Box className="relative mx-auto" sx={{ maxWidth: { xs: '280px', sm: '400px' } }}>
            {/* Golden Ticket Card */}
            <Box
              className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              sx={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              {/* Shimmering Effect */}
              <Box
                className="absolute inset-0 rounded-2xl animate-shimmer"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  backgroundSize: '200% 100%'
                }}
              />

              {/* Ticket Content */}
              <Box className="relative p-4 text-center" sx={{ p: { xs: 2, sm: 4 } }}>
                {/* Header */}
                <Typography
                  variant="h6"
                  className="font-bold text-yellow-900 mb-2 tracking-wider"
                  sx={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    fontSize: { xs: '1.1rem', sm: '1.5rem' }
                  }}
                >
                  GOLDEN TICKET
                </Typography>

                <Typography variant="body2" className="text-yellow-800 !mb-4" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                  Thanks for empowering students!
                </Typography>

                {/* Coupon Code Section */}
                <Box className="bg-yellow-800 bg-opacity-20 rounded-xl !p-3 mb-3 border-2 border-yellow-700 border-dashed" sx={{ p: { xs: 2, sm: 2 } }}>
                  <Typography
                    variant="h4"
                    className="font-mono font-bold text-yellow-900 mb-2 tracking-widest"
                    sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' } }}
                  >
                    {couponCode}
                  </Typography>

                  <Button
                    onClick={handleCopy}
                    startIcon={<CopyIcon />}
                    variant="contained"
                    size="small"
                    className={`${copied ? '!bg-green-600' : '!bg-yellow-700'} hover:!bg-yellow-800 text-white font-medium`}
                    sx={{ textTransform: 'none', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
                  >
                    {copied ? '✓ Copied!' : 'Copy'}
                  </Button>

                  <Typography
                    variant="body2"
                    className="font-mono text-yellow-900 !my-2 tracking-tight"
                    sx={{ fontSize: { xs: '1rem', sm: '1.3rem' } }}
                  >
                    use this in our super gold app
                  </Typography>


                </Box>

                {/* Payment ID Section */}
                {paymentId && (
                  <Box className="bg-yellow-900 bg-opacity-30 rounded-lg p-2 mb-3">
                    <Typography variant="caption" className="text-yellow-800 block mb-1">
                      Payment ID
                    </Typography>
                    <Typography variant="body2" className="text-yellow-900 font-mono text-xs">
                      {paymentId}
                    </Typography>
                  </Box>
                )}

                {/* Decorative Elements */}
                <Box className="flex justify-between items-center text-yellow-700">
                  <StarIcon className="text-lg animate-pulse" sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }} />
                  <Typography variant="body2" className="font-medium" sx={{ fontSize: { xs: '0.7rem', sm: '0.9rem' } }}>
                    Your Token of Gratitude
                  </Typography>
                  <StarIcon className="text-lg animate-pulse" sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }} style={{ animationDelay: '0.5s' }} />
                </Box>
              </Box>

              {/* Decorative Corners */}
              <Box className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-yellow-700 rounded-tl-lg" sx={{ width: { xs: 8, sm: 16 }, height: { xs: 8, sm: 16 } }} />
              <Box className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-yellow-700 rounded-tr-lg" sx={{ width: { xs: 8, sm: 16 }, height: { xs: 8, sm: 16 } }} />
              <Box className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-yellow-700 rounded-bl-lg" sx={{ width: { xs: 8, sm: 16 }, height: { xs: 8, sm: 16 } }} />
              <Box className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-yellow-700 rounded-br-lg" sx={{ width: { xs: 8, sm: 16 }, height: { xs: 8, sm: 16 } }} />
            </Box>

            {/* Shadow Effect */}
            <Box
              className="absolute inset-0 bg-yellow-600 rounded-2xl -z-10 transform translate-y-2 translate-x-1"
              style={{ filter: 'blur(8px)', opacity: 0.3 }}
            />
          </Box>
        </Fade>

        {/* Thank You Message */}
        <Fade in={showCelebration} timeout={1800}>
          <Box className="text-center mt-4 mb-2" sx={{ mt: { xs: 3, sm: 8 }, mb: { xs: 2, sm: 4 } }}>
            <Typography variant="h6" className="text-white font-medium mb-2" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
               Your kit will be donated soon! 
            </Typography>

           <Box className="flex justify-center gap-4 text-white text-sm opacity-80">
    <Box className="text-center">
        <Typography variant="body2" className="font-bold" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>🧠</Typography>
        <Typography variant="caption" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' } }}>Focused Learning</Typography>
    </Box>
    <Box className="text-center">
        <Typography variant="body2" className="font-bold" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>🌱</Typography>
        <Typography variant="caption" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' } }}>Smarter Growth</Typography>
    </Box>
    <Box className="text-center">
        <Typography variant="body2" className="font-bold" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>🚀</Typography>
        <Typography variant="caption" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' } }}>Brighter Future</Typography>
    </Box>
</Box>
          </Box>
        </Fade>

        {/* Gradient Background */}
      </DialogContent>
        <Box
          className="absolute inset-0 -z-20 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #2E7D32 0%, #38608eff 50%, #4ca0afff 100%)',
            filter: 'blur(1px)'
          }}
        />
    </Dialog>
  );
});

export default SuperCouponModal;