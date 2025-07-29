import { motion } from 'framer-motion';

const LoadingDots = ({ className = '' }) => {
  const waveVariants = {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    dot: {
      animate: {
        y: [0, -6, 0],
        scaleY: [1, 0.8, 1],
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
          repeat: Infinity,
        },
      },
    },
  };

  return (
    <motion.div
      variants={waveVariants.container}
      initial="initial"
      animate="animate"
      className={`flex items-center justify-center space-x-1 ${className}`}
    >
      {[1, 2, 3].map((dot) => (
        <motion.div
          key={dot}
          className="w-2 h-2 bg-primary rounded-full"
          variants={waveVariants.dot}
        />
      ))}
    </motion.div>
  );
};

export default LoadingDots;
