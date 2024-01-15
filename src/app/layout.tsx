import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shopbify',
  description: 'You can order online anything to get on hand in a short time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className=' p-4 max-w-7xl min-w-[300px] m-auto  '>
          {children}
        </main>
      </body>
    </html>
  );
}
