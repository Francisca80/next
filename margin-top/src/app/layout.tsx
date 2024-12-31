'use client';
import './globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactSectionDark from '@/components/ContactSectionDark';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const isLinkInBio = pathname === '/link-in-bio';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body>
        {!isLinkInBio && <Header />}
        <main className="flex-grow">
          {isMounted ? children : null}
        </main>
        {!isLinkInBio && (
          <>
            <ContactSectionDark />    
            <Footer />
          </>
        )}              
      </body>
    </html>
  );
}
