'use client';
const CircularProgress = ({ progress }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-8 h-8">
      <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />

        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300 ease-out"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-medium">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default CircularProgress;
