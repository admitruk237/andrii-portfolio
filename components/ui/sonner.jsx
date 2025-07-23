'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

const Toaster = ({ ...props }) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme}
      position="top-center"
      className="toaster group"
      toastOptions={{
        style: {
          background: '#27272c',
          color: ' #00ff99',
          border: '1px solid #444',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          fontSize: '16px',
          fontFamily: 'var(--font-jetbrainsMono)',
        },
        duration: 5000,
      }}
      {...props}
    />
  );
};

export { Toaster };
