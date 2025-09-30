'use client';

import { memo } from 'react';
import type { CircularProgressProps } from '@/types';

const CircularProgress = memo<CircularProgressProps>(
  ({ progress, size = 32, strokeWidth = 2 }) => {
    const radius = (size - strokeWidth * 2) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const viewBoxSize = size + strokeWidth * 2;
    const center = viewBoxSize / 2;

    return (
      <div
        className="relative"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progress: ${Math.round(progress)}%`}
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            opacity="0.3"
          />

          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium" aria-hidden="true">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    );
  }
);

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
