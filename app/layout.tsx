import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import PageTransition from '@/components/PageTransition/PageTransition';
import StairTransition from '@/components/StairTransition/StairTransition';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { Toaster } from '@/components/ui';
import { APP_CONFIG } from '@/config/email';
import { ReactNode } from 'react';

const jetBrainsMono = JetBrains_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
  subsets: ['latin'],
});

export const metadata = {
  title: APP_CONFIG.name,
  description: `${APP_CONFIG.developerName} - Frontend Developer Portfolio. Showcasing modern web development skills with React, Next.js, TypeScript, and more.`,
  keywords:
    'frontend developer, react, nextjs, typescript, portfolio, web development',
  author: APP_CONFIG.developerName,
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable} suppressHydrationWarning={true}>
        <ErrorBoundary>
          <Header />
          <Toaster />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </ErrorBoundary>
      </body>
    </html>
  );
}
