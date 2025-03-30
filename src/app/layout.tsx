import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import { AnimationProvider } from './contexts/AnimationContext';

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Borgar Barland',
  description: 'Generating software through passion and curiosity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative scrollbar-none">
      <AnimationProvider>
        <body className={`${robotoMono.className} antialiased`}>
          <Navbar />
          {children}
        </body>
      </AnimationProvider>
    </html>
  );
}
