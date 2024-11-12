'use client';
import './globals.css';

import Header from '../components/header';
import Footer from '../components/footer';
import ContactSectionDark from '@/components/ContactSectionDark';
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false);

  // Use useEffect to set isMounted to true after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex-grow">
          {isMounted ? children : null} {/* Render children only after mounting */}
        </main>
        <ContactSectionDark />    
        <Footer />              
      </body>
    </html>
  );
}
