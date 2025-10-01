'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [isTransitionVisible, setIsTransitionVisible] = useState<boolean>(true);

  useEffect(() => {
    setIsTransitionVisible(true);
    const hideTimer = setTimeout(() => {
      setIsTransitionVisible(false);
    }, 1000);

    return () => {
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isTransitionVisible && (
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
          }}
          exit={{ opacity: 0 }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-50"
        />
      )}
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
