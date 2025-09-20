import React from 'react';
import { motion } from 'framer-motion';
import { 
  fadeInUp, 
  hoverScale, 
  hoverLift, 
  hoverGlow, 
  cardHover, 
  buttonPress,
  tableRowHover,
  staggerContainer,
  staggerItem
} from '../animations/AnimationVariants';

// Animated Card Component
export const AnimatedCard = ({ children, className = "", ...props }) => (
  <motion.div
    className={className}
    initial="initial"
    animate="animate"
    whileHover="whileHover"
    variants={cardHover}
    {...props}
  >
    {children}
  </motion.div>
);

// Animated Button Component
export const AnimatedButton = ({ children, className = "", ...props }) => (
  <motion.button
    className={className}
    whileHover={hoverScale.whileHover}
    whileTap={buttonPress.whileTap}
    {...props}
  >
    {children}
  </motion.button>
);

// Animated Icon Button
export const AnimatedIconButton = ({ children, className = "", ...props }) => (
  <motion.button
    className={className}
    whileHover={{ 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }}
    whileTap={{ 
      scale: 0.9,
      transition: { duration: 0.1 }
    }}
    {...props}
  >
    {children}
  </motion.button>
);

// Animated Table Row
export const AnimatedTableRow = ({ children, className = "", ...props }) => (
  <motion.tr
    className={className}
    whileHover={tableRowHover.whileHover}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
    {...props}
  >
    {children}
  </motion.tr>
);

// Animated List Item
export const AnimatedListItem = ({ children, className = "", index = 0, ...props }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ 
      duration: 0.3, 
      delay: index * 0.1,
      ease: "easeOut"
    }}
    whileHover={{
      x: 4,
      transition: { duration: 0.2 }
    }}
    {...props}
  >
    {children}
  </motion.div>
);

// Animated Container with Stagger
export const StaggerContainer = ({ children, className = "", ...props }) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="initial"
    animate="animate"
    {...props}
  >
    {children}
  </motion.div>
);

// Animated Stagger Item
export const StaggerItem = ({ children, className = "", ...props }) => (
  <motion.div
    className={className}
    variants={staggerItem}
    {...props}
  >
    {children}
  </motion.div>
);

// Animated Page Container
export const AnimatedPage = ({ children, className = "", ...props }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
);

// Animated Chart Container
export const AnimatedChart = ({ children, className = "", ...props }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
);

// Animated Badge/Status
export const AnimatedBadge = ({ children, className = "", color = "primary", ...props }) => (
  <motion.span
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
    style={{
      backgroundColor: color,
      color: 'white',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 500,
      display: 'inline-block'
    }}
    {...props}
  >
    {children}
  </motion.span>
);

// Animated Progress Bar
export const AnimatedProgressBar = ({ 
  value, 
  max = 100, 
  className = "", 
  color = "#3b82f6",
  ...props 
}) => (
  <motion.div
    className={className}
    style={{
      width: '100%',
      height: '8px',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
      overflow: 'hidden'
    }}
    {...props}
  >
    <motion.div
      style={{
        height: '100%',
        backgroundColor: color,
        borderRadius: '4px'
      }}
      initial={{ width: 0 }}
      animate={{ width: `${(value / max) * 100}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  </motion.div>
);

// Animated Counter
export const AnimatedCounter = ({ 
  value, 
  duration = 1, 
  className = "",
  ...props 
}) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    let startTime;
    const startValue = 0;
    const endValue = value;
    const durationMs = duration * 1000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / durationMs, 1);
      
      const currentValue = Math.floor(progress * (endValue - startValue) + startValue);
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...props}
    >
      {displayValue.toLocaleString()}
    </motion.span>
  );
};

// Animated Loading Spinner
export const AnimatedSpinner = ({ size = 24, color = "#3b82f6" }) => (
  <motion.div
    style={{
      width: size,
      height: size,
      border: `2px solid ${color}20`,
      borderTop: `2px solid ${color}`,
      borderRadius: '50%'
    }}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
);
