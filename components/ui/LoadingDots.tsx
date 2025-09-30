import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

const LoadingDots = ({ className }: Props) => {
  return (
    <motion.div
      className={`flex items-center justify-center space-x-1 ${className}`}
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-primary rounded-full"
          animate={{
            y: [0, -6, 0],
            scaleY: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: index * 0.1,
          }}
          aria-label={`Loading dot ${index + 1}`}
          role="status"
        />
      ))}
    </motion.div>
  );
};

export default LoadingDots;
