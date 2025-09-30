'use client';

import { useState, useCallback } from 'react';
import type { UseDownloadCVReturn, DownloadState } from '@/types';

const useDownloadCV = (): UseDownloadCVReturn => {
  const [downloadState, setDownloadState] = useState<DownloadState>('idle');
  const [progress, setProgress] = useState<number>(0);

  const handleDownloadCV = useCallback(async (): Promise<void> => {
    setDownloadState('loading');
    setProgress(0);

    try {
      const duration = 2000;
      const interval = 50;
      const steps = duration / interval;
      const progressStep = 100 / steps;

      const progressInterval = setInterval(() => {
        setProgress((prev: number) => {
          const newProgress = prev + progressStep;
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return newProgress;
        });
      }, interval);

      await new Promise((resolve) => setTimeout(resolve, duration));

      const link = document.createElement('a');
      link.href = '/cv/Andrii_Dmytruk_CV.pdf';
      link.download = 'Andrii_Dmytruk_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadState('success');

      setTimeout(() => {
        setDownloadState('idle');
        setProgress(0);
      }, 2000);
    } catch (error) {
      console.error('Download error:', error);
      setDownloadState('error');
      setProgress(0);

      setTimeout(() => {
        setDownloadState('idle');
      }, 2000);
    }
  }, []);

  return { downloadState, progress, handleDownloadCV };
};

export default useDownloadCV;
export { useDownloadCV };
