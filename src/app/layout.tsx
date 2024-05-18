import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

import Footer from './components/Footer';
import Navbar from './components/NavBar';

//REF: medium.com/@a.pirus/how-to-create-a-responsive-navigation-bar-in-next-js-13-e5540789a017#:~:text=8.%20To%20add%20a%20navigation%20bar%20to%20all%20of%20our%20pages%2C%20open%20%E2%80%98layout.tsx%E2%80%99%20and%20place%20the%20%3CNavigation%3E%20tag%20above%20the%20%7Bchildren%7D%20element.

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ObCine',
  description: 'Oberlin College CIME department students films archive',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
