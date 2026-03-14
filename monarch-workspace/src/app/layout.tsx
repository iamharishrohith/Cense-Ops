import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Monarch Workspace IdP',
  description: 'Fake Identity Provider for enterprise demos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f5f5] text-[#333] min-h-screen flex flex-col`}>
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
