import React, { useCallback } from 'react';
import {
  Box,
  Button,
  Slider,
  CircularProgress,
  Typography,
} from '@mui/material';
import {
  Payment as PaymentIcon,
  MenuBook as KitIcon
} from '@mui/icons-material';
import { Grow } from '@mui/material';

// --- Constants ---
const MAXIMUM_KIT_COUNT = 10;
const KIT_QUICK_OPTIONS = [1, 3, 5, 10];
const KIT_COST = 99;
const STUDENTS_PER_KIT = 1;

function calculatePrice(count: number) {
  return count * KIT_COST;
}

function calculateStudentsImpacted(count: number) {
  return count * STUDENTS_PER_KIT;
}

interface KitCounterProps {
  selectedCount: number;
  adjustCount: (increment: boolean) => void;
  onDonateClick: () => void;
}

const KitCounter: React.FC<KitCounterProps> = React.memo(
  ({ selectedCount, adjustCount, onDonateClick }) => {
    
    const handleSetCount = useCallback((targetCount: number) => {
      const delta = targetCount - selectedCount;
      if (delta === 0) return;
      const increment = delta > 0;
      const steps = Math.abs(delta);
      for (let i = 0; i < steps; i++) {
        adjustCount(increment);
      }
    }, [selectedCount, adjustCount]);

    const handleSliderChange = useCallback((_event: Event, newValue: number | number[]) => {
      handleSetCount(newValue as number);
    }, [handleSetCount]);

    const progressValue = (selectedCount / MAXIMUM_KIT_COUNT) * 100;

    return (
      <Grow in={true} timeout={800}>
        <Box
          className="bg-gradient-to-br from-white to-sky-50/70 rounded-3xl shadow-2xl p-6 md:p-8 border border-sky-100"
          sx={{
            '--edu-primary': '#1565C0',
            '--edu-dark': '#0D47A1',
          }}
        >
          <Box className="text-center">
            <Typography
              variant="h5"
              className="!font-bold text-center !mb-6 !font-modern !tracking-tight"
              sx={{ color: 'var(--edu-primary)' }}
            >
             Donate kit and get Super Gold Coupon for Super Gold app!
            </Typography>

            {/* ---- FIXED PERFECTLY CENTERED CIRCULAR SECTION ---- */}
            <Box className="flex justify-center mb-8 relative">
              <Box
                sx={{
                  position: "relative",
                  width: 160,
                  height: 160,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Background circle */}
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={160}
                  thickness={4}
                  sx={{
                    color: "#d5dce0ec",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />

                {/* Foreground circle */}
                <CircularProgress
                  variant="determinate"
                  value={progressValue}
                  size={160}
                  thickness={4}
                  sx={{
                    color: "var(--edu-primary)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    "& .MuiCircularProgress-circle": {
                      strokeLinecap: "round",
                      transition: "stroke-dashoffset 0.5s ease-in-out",
                    },
                  }}
                />

                {/* Center content */}
                <Box
                  className=""
                  sx={{
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <KitIcon
                    className="text-4xl mb-1"
                    sx={{ color: "var(--edu-primary)" }}
                  />
                  <Typography
                    variant="h3"
                    className="font-extrabold"
                    sx={{ color: "var(--edu-primary)" }}
                  >
                    {selectedCount}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-600 font-semibold"
                  >
                    {selectedCount === 1 ? "Kit" : "Kits"}
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* ---- END FIX ---- */}

            {/* Quick Buttons */}
            <Box className="flex justify-center gap-3 mb-6">
              {KIT_QUICK_OPTIONS.map((num) => (
                <Button
                  key={num}
                  onClick={() => handleSetCount(num)}
                  variant={selectedCount === num ? "contained" : "outlined"}
                  className={
                    selectedCount === num
                      ? "bg-edu-primary text-white font-bold shadow-md hover:shadow-lg transition-all"
                      : "text-edu-primary border-edu-primary shadow-sm hover:shadow-md transition-all"
                  }
                  sx={{
                    minWidth: 60,
                    borderColor: 'var(--edu-primary)',
                    color: selectedCount !== num ? 'var(--edu-primary)' : 'white',
                    backgroundColor: selectedCount === num ? 'var(--edu-primary)' : 'white',
                    '&:hover': {
                      borderColor: 'var(--edu-dark)',
                      backgroundColor: selectedCount === num ? 'var(--edu-dark)' : 'var(--edu-light)',
                    }
                  }}
                >
                  {num}
                </Button>
              ))}
            </Box>

            {/* Range Slider */}
            <Box className="mb-8 px-4">
              <Slider
                value={selectedCount}
                onChange={handleSliderChange}
                min={1}
                max={MAXIMUM_KIT_COUNT}
                marks
                step={1}
                valueLabelDisplay="auto"
                sx={{
                  color: 'var(--edu-primary)',
                  '& .MuiSlider-thumb': {
                    backgroundColor: 'var(--edu-primary)',
                  },
                  '& .MuiSlider-track': {
                    backgroundColor: 'var(--edu-primary)',
                  },
                }}
              />
            </Box>

            {/* Impact Details */}
            <Box className="flex justify-between items-center bg-sky-50 p-4 rounded-xl mb-6 shadow-inner">
              <Box className="text-left">
                <Typography variant="subtitle1" className="font-bold text-gray-700">
                  Total Price
                </Typography>
                <Typography variant="h5" className="font-extrabold" sx={{ color: 'var(--edu-dark)' }}>
                  ₹{calculatePrice(selectedCount)}
                </Typography>
              </Box>
              <Box className="text-right">
                <Typography variant="subtitle1" className="font-bold text-gray-700">
                  Beneficiaries
                </Typography>
                <Typography variant="h5" className="font-extrabold" sx={{ color: 'var(--edu-dark)' }}>
                  {calculateStudentsImpacted(selectedCount)}+
                </Typography>
              </Box>
            </Box>

            {/* Donate Button */}
            <Box className="flex justify-center">
              <Button
                onClick={onDonateClick}
                variant="contained"
                size="large"
                startIcon={<PaymentIcon />}
                className="bg-edu-primary hover:bg-edu-dark text-white py-4 rounded-xl text-lg font-bold shadow-xl w-full max-w-sm"
                sx={{
                  textTransform: "none",
                  backgroundColor: 'var(--edu-primary)',
                  '&:hover': { backgroundColor: 'var(--edu-dark)' }
                }}
              >
                Donate {selectedCount} Kit{selectedCount > 1 ? "s" : ""}
              </Button>
            </Box>
          </Box>
        </Box>
      </Grow>
    );
  }
);

export default KitCounter;
