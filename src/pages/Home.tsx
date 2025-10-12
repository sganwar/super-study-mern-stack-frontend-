import React, { useState, useEffect, useCallback, lazy, Suspense,useRef } from 'react';
import toast from 'react-hot-toast';
import { useCoupon } from '../hooks/useCoupon';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Fade,
  TextField,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
    Grid,
} from '@mui/material';
import {
  Close as CloseIcon,
  Redeem as RedeemIcon,
  // CurrencyRupee as CurrencyRupeeIcon,
} from '@mui/icons-material';
// import Loader from '../components/ui/Loader';
import LoaderOverlay from '../components/ui/LoaderOverlay';
import KitCounter from '../components/ui/KitCounter';
import type { RazorpayPaymentResponse } from '../types/razorpay';
const ManualCouponFetchModal = lazy(() => import('../components/ui/ManualCouponFetchModal'));
const SuperCouponModal = lazy(() => import('../components/ui/SuperCouponModal'));
const PUBLIC_LOGO = 'https://www.superstudy.co.in/logo.png'; // Public Logo for Razorpay
const MAXIMUM_KIT_COUNT = 10; // Set a maximum limit for education kit

// calculate price based on count 
const calculatePrice = (count: number) => count * 99;

const Home: React.FC = () => {
  const { pathname } = useLocation(); //for handling scroll to top on page load
  const [selectedCount, setSelectedCount] = useState<number>(1);
  const [showDonateForm, setShowDonateForm] = useState<boolean>(false);
  const [paymentId, setPaymentId] = useState<string>('');
  const [showManualCouponFetchModal, setShowManualCouponFetchModal] = useState<boolean>(false);
  const [isRazorpayModalOpen, setIsRazorpayModalOpen] = useState<boolean>(false);
  const [lastManualSubmission, setLastManualSubmission] = useState<string | null>(null);
  const kitCounterSectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    contact: ''
  });
  const { data: couponData, error: couponError, isLoading: isCouponLoading, isError: isCouponError } = useCoupon(paymentId);

  // Validate donation donation form inputs
  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      contact: ''
    };
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.contact.trim()) {
      errors.contact = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.contact.replace(/\D/g, ''))) {
      errors.contact = 'Please enter a valid 10-digit phone number';
    }
    setFormErrors(errors);
    return !errors.name && !errors.email && !errors.contact;
  };

  // handle razorpay payment button click
  const handlePayment = () => {
    // if donation form is invalid, return. don't proceed to payment
    if (!validateForm()) return;

    // close the donation form modal
    setShowDonateForm(false);

    // options for razorpay payment integration
    const options = {
      "key": "rzp_live_RJpArHowLAOS2l", // live mode public key
      // "key": "rzp_test_RJp1B7TPct9hmi", //test mode public key
      // "amount": (calculatePrice(selectedCount) * 100).toString(), //live mdoe
      "amount": 100, //test mode
      "name": "Super Study",
      "image": PUBLIC_LOGO,
      "description": `Donate ${selectedCount} Kit${selectedCount > 1 ? 's' : ''}`,
      "prefill": {
        "name": formData.name,
        "email": formData.email,
        "contact": formData.contact
      },
      modal: {
        ondismiss: function () {
          document.body.style.overflow = '';
          setIsRazorpayModalOpen(false);
        },
      },
      "notes": {
        "customer_name": formData.name,
        "email": formData.email,
        "phone": formData.contact,
        "kit_count": selectedCount.toString(),
        "price_per_unit": "99",
        "total_calculation": `${selectedCount} * 99 = ${calculatePrice(selectedCount)}`,
      },
      "handler": function (response: RazorpayPaymentResponse) {
        console.log("✅ Payment successful! Payment ID:", response.razorpay_payment_id);
        document.body.style.overflow = '';
        setIsRazorpayModalOpen(false)
        setPaymentId(response.razorpay_payment_id); // This triggers the React Query
      },
      "theme": {
        "color": "#2E7D32",
        "backdrop_color": "#000000b7"
      }
    };

    // instantiate razorpay object
    const rzp = new window.Razorpay(options);

    // handle payment failure
    rzp.on('payment.failed', function (response: RazorpayPaymentResponse) {
      console.log("❌ Payment failed:", response);
      toast.error("Payment failed. Please try again.");
      document.body.style.overflow = '';
      setIsRazorpayModalOpen(false)
    });

    // close the donation form modal here to avoid razropay ui conflict in mobile
    setShowDonateForm(false);
    // set razorpayl modal open to perform loader view
    setIsRazorpayModalOpen(true)
    // open razorpay payment modal
    rzp.open();

    // Prevent background scrolling when payment modal is open (delay to ensure it applies after modal opens fully)
    setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 1000);
  };

  // Handle donation form input changes and clear errors on change
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Adjust kit count with limits
  const adjustCount = useCallback((increment: boolean) => {
    setSelectedCount(prev => {
      if (increment) {
        if (prev >= MAXIMUM_KIT_COUNT) {
          // toast.error(`You can donate maximum of ${MAXIMUM_KIT_COUNT} kits at a time.`);
          return prev;
        }
        return prev + 1;
      } else {
        return Math.max(prev - 1, 1);
      }
    });
  }, []);

  // Scroll to top on component mount to avoid scroll position issues on new page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // if coupon fetching fils in react query
  // Modify the error useEffect
  useEffect(() => {
    if (isCouponError && paymentId && paymentId === lastManualSubmission) {
      console.error("Coupon fetch error:", couponError);
      toast.error(couponError?.message || "Coupon fetching error", {
        duration: 600000,
      });
      // Reset after showing error
      setLastManualSubmission(null);
    }
  }, [isCouponError, couponError, paymentId, lastManualSubmission]);


  // useefect for navigating to kit counter section initially
  useEffect(() => {
    // Scroll to other section on page load
    const timer = setTimeout(()=>{

      kitCounterSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    },3000)
    return ()=>clearTimeout(timer)
  }, []);

  
  return (
    <Box className="home-page min-h-screen">

      {isCouponLoading && (<><LoaderOverlay message='wait! we have a coupon for you' /></>)}
      {isRazorpayModalOpen && (<LoaderOverlay message='Please wait! Payment is setting up... ' />)}

      {/* Hero Section */}
      <Box
      className="relative overflow-hidden py-20"
      sx={{
        // Gradient from the user's index.tsx: Blue to Purple
        background: "linear-gradient(135deg, #1565C0 0%, #7B1FA2 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column: Text and Button */}
          <Grid size={{xs:12,md:6}}>
             <Fade in={true} timeout={1000}>
              <Box>
            <Typography
              variant="h2"
              className="text-white font-bold !mb-6 !font-display text-center md:text-left"
              sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
            >
              Transform Lives Through Education
            </Typography>
            <Typography
              variant="h5"
              className="text-white/90 !mb-1 md:!mb-8 leading-relaxed !font-body text-center md:text-left"
            >
              Every ₹99 you donate provides a complete education kit to a
              child in need. Be the reason a student succeeds.
            </Typography>

            <Box className="flex justify-center md:justify-start">
              <Button
                onClick={() => setShowManualCouponFetchModal(true)}
                variant="contained"
                startIcon={<RedeemIcon />}
                // Tailwin styling adjusted for the button
                className="!bg-black !text-white font-bold text-lg px-6 py-3 !mt-6 rounded-xl shadow-lg hover:!bg-white hover:!text-black animate-bounce-slow !font-mono"
                sx={{ textTransform: "none" }}
              >
                Get Super Gold Coupon 🎁
              </Button>
            </Box>
            </Box>
            </Fade>
          </Grid>

          {/* Right Column: Image */}
          <Grid size={{xs:12,md:6}}>
            <Box className="relative h-80 md:h-96 w-full mt-8 md:mt-0">
              <img
                src="poor-boy.webp"
                alt="poor student"
                // Tailwind classes for styling (object-cover, rounded, shadow)
                className="object-cover rounded-2xl shadow-2xl w-full h-full"
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>



{/* Kit Counter section */}
     
      <Container maxWidth="lg" className="py-16 relative">
        
        <Box ref={kitCounterSectionRef} className="text-center mb-2 pt-16">
          {/* <Typography variant="h4" className="!tracking-tight text-nature-primary font-bold mb-4 !font-modern">
            Choose Your Education Impact
          </Typography> */}
          {/* <Typography variant="h6" className="text-nature-dark">
            Select how many kits you'd like to donate!
          </Typography> */}
        </Box>

        <Box className="max-w-2xl mx-auto">
          <KitCounter
            selectedCount={selectedCount}
            adjustCount={adjustCount}
            onDonateClick={() => setShowDonateForm(true)}
          />
        </Box>
      </Container>

     



      {/* Donation Form Modal */}
      <Dialog
        open={showDonateForm}
        onClose={() => setShowDonateForm(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px'
          },
        }}
      >
        <DialogTitle className="text-center bg-nature-gradient text-white" sx={{ pb: 1 }}>
          <Box className="flex justify-between items-center">
            <Typography variant="h6" className="font-bold text-edu-primary">
              Donation Form
            </Typography>
            <IconButton onClick={() => setShowDonateForm(false)} className="!text-white !bg-[#1565C0]">
              <CloseIcon fontSize='small' />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent className="p-8" sx={{ pt: 4 }}>
          <Box className="space-y-6">
            <TextField
              fullWidth
              label="Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              error={!!formErrors.name}
              helperText={formErrors.name}
              variant="outlined"
              className='!mt-4'
            />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={!!formErrors.email}
              helperText={formErrors.email}
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Phone Number"
              value={formData.contact}
              onChange={(e) => handleInputChange('contact', e.target.value)}
              error={!!formErrors.contact}
              helperText={formErrors.contact}
              variant="outlined"
            />

            <Box className="text-center bg-nature-light p-4 rounded-lg">
              <Typography variant="h6" className="text-nature-primary font-bold">
                {selectedCount} Kit{selectedCount > 1 ? 's' : ''} - ₹{calculatePrice(selectedCount)}
              </Typography>
              <Typography variant="body2" className="text-nature-dark">
               Students Impacted {selectedCount}
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handlePayment}
              className="bg-nature-primary hover:bg-nature-dark py-3 text-lg font-bold rounded-lg"
              sx={{ textTransform: 'none' }}
            >
              Proceed to Payment
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Fetch Coupon Modal */}
      <Suspense fallback={<></>}>
        <ManualCouponFetchModal
          open={showManualCouponFetchModal}
          onClose={() => setShowManualCouponFetchModal(false)}
          setPaymentId={setPaymentId}
          setLastManualSubmission={setLastManualSubmission}
        />
      </Suspense>

      {/* Golden Coupon Modal */}
      <Suspense fallback={<></>}>
        <SuperCouponModal
          open={!!couponData && !isCouponLoading} // Show only when coupon data is available and coupon is not loading (react query)
          onClose={() => {
            setPaymentId(''); // Reset payment ID
          }}
          couponCode={couponData?.coupon || ''}
          treeCount={selectedCount}
          paymentId={paymentId}
        />
      </Suspense>
    </Box>
  );
};

export default Home;
