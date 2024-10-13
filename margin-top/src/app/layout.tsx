import './globals.css';

import { ThemeProvider } from './theme-context';
import Header from '../components/header';

export const metadata = {
  title: 'Margin Top',
  description: 'Creating space for BOLD designs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
