import './globals.css';
import type { Metadata } from 'next';
import { LoadingProvider } from "@/components/LoadingProvider";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Travel Agency',
  description: 'My Travel Agency',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   images: [
  //     {
  //       url: 'https://bolt.new/static/og_default.png',
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
