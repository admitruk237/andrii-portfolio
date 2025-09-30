import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

interface ContactItem {
  type: 'phone' | 'email' | 'location';
  description: string;
}

interface UseContactActionReturn {
  isMobile: boolean;
  handleContactAction: (item: ContactItem) => void;
}

export const useContactAction = (): UseContactActionReturn => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = (): void => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleContactAction = useCallback((item: ContactItem): void => {
    const desc = item.description;

    if (isMobile) {
      switch (item.type) {
        case 'phone':
          window.location.href = `tel:${desc}`;
          return;
        case 'email':
          window.location.href = `mailto:${desc}`;
          return;
        case 'location':
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              desc
            )}`,
            '_blank'
          );
          return;
        default:
          break;
      }
    }

    navigator.clipboard.writeText(desc);
    toast.success('Copied to clipboard!');
  }, [isMobile]);

  return { isMobile, handleContactAction };
};
