'use client';

import { useState } from 'react';

const useDownloadCV = () => {
  const [downloadState, setDownloadState] = useState('idle');
  const [progress, setProgress] = useState(0);

  const handleDownloadCV = async () => {
    setDownloadState('loading');
    setProgress(0);

    try {
      const duration = 2000;
      const interval = 50;
      const steps = duration / interval;
      const progressStep = 100 / steps;

      const progressInterval = setInterval(() => {
        setProgress((prev) => {
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
      setDownloadState('idle');
      setProgress(0);
    }
  };

  return { downloadState, progress, handleDownloadCV };
};

export default useDownloadCV;
