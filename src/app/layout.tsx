import type { Metadata } from 'next';
import { JetBrains_Mono, Roboto_Mono } from 'next/font/google';
import { AnimationProvider } from '@/contexts/AnimationContext';
import '@/app/globals.css';
import Navbar from '@/app/components/layout/Navbar';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Borgar Barland',
  description: 'Creating software through passion and curiosity.',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative scrollbar-none">
      <AnimationProvider>
        <body className={`${jetBrainsMono.className} antialiased`}>
          <Navbar />
          {children}
        </body>
      </AnimationProvider>
    </html>
  );
}
