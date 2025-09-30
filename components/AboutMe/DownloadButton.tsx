import { ReactElement } from 'react';
import { FiCheck, FiDownload, FiAlertCircle } from 'react-icons/fi';
import CircularProgress from '../CircularProgress/CircularProgress';
import type { DownloadState } from '@/types';

const BUTTON_CONTENT_MAP: Record<
  DownloadState,
  (progress: number) => ReactElement
> = {
  loading: (progress) => (
    <div
      className="flex items-center justify-center w-full"
      aria-label="Downloading CV"
    >
      <CircularProgress progress={progress} />
    </div>
  ),
  success: () => (
    <div
      className="flex items-center justify-center w-full"
      aria-label="CV Downloaded"
    >
      <FiCheck className="text-xl text-green-500" />
    </div>
  ),
  error: () => (
    <div
      className="flex items-center justify-center w-full"
      aria-label="Download Failed"
    >
      <FiAlertCircle className="text-xl text-red-500" />
    </div>
  ),
  idle: () => (
    <div className="flex items-center gap-2">
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </div>
  ),
};

export const getButtonContent = (
  state: DownloadState,
  progress: number
): ReactElement => {
  return BUTTON_CONTENT_MAP[state](progress);
};
