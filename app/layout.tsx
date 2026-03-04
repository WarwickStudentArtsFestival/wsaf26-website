import type { Metadata, Viewport } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Footer from '@/app/components/footer/footer';
import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/app/components/header';
import LayoutClient from '@/app/layout-client';
import FeedbackPopup from '@/app/components/feedback-popup';
import mainConfig from '@config/main-config';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const metadataBase = process.env.BASE_URL
  ? new URL(process.env.BASE_URL)
  : undefined;

export const metadata: Metadata = {
  title: {
    default: `Warwick Student Arts Festival ${mainConfig.dates.year}`,
    template: `%s | WSAF ${mainConfig.dates.year}`,
  },
  description: mainConfig.defaultMetaDescription,
  category: 'website',
  keywords: [
    'Warwick',
    'Warwick University',
    'University of Warwick',
    'Warwick Student Arts Festival',
    'WSAF',
    'Warwick Arts',
    'Festival',
  ],
  metadataBase,
};

export const viewport: Viewport = {
  themeColor: '#087F8C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${lexend.className} flex flex-col min-h-screen`}>
        <LayoutClient>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
          )}
          <Header />
          {children}
          <Footer />
          {mainConfig.feedback.popup && <FeedbackPopup />}
        </LayoutClient>
      </body>
    </html>
  );
}
