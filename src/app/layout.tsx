import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

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
        <Navbar />
        <main className=' min-h-[500px] flex flex-col justify-center items-center p-4 max-w-7xl min-w-[300px] m-auto  '>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
