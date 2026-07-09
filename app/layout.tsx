import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'QCS Waterproofing - Professional Waterproofing Services in Quetta',
  description: 'Expert ceiling waterproofing, heatproofing, and comprehensive water protection services in Quetta. Professional solutions with 5-year warranty.',
  keywords: 'waterproofing, heatproofing, ceiling waterproofing, water tank leakage, Quetta, roof protection',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
