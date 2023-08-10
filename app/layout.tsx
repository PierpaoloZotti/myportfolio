import Header from '@/components/header';
import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pierpaolo | Personal Portfoilio',
  description: 'Pierpaolo is a full stack developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='!scroll-smooth'
    >
      <body
        className={`${font.className}  bg-gray-50 text-gray-950 relative pt-28 sm:pt36`}
      >
        <div className='bg-[#a54d2c70] absolute top-[-6rem] right-[-11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#534e6470] absolute top-[-1rem] left-[-33rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[-15rem] 2x:left-[-5rem]'></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position='top-right' />
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
