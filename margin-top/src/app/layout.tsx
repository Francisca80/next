'use client';
import './globals.css';


import Header from '../components/header';
import Footer from '../components/footer';
import ContactSectionDark from '@/components/ContactSectionDark';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Header />
          <main>{children}</main>
          <ContactSectionDark />    
          <Footer />              
      </body>
    </html>
  );
}
