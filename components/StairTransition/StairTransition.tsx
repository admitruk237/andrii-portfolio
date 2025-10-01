'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Stairs from '../Stairs/Stairs';

const StairTransition = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState<number>(0);

  useEffect(() => {
    setMounted((prev) => prev + 1);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <div key={`${pathname}-${mounted}`}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
