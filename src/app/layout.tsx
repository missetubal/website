import type { Metadata } from 'next';
import { JetBrains_Mono, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '../components/custom';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrainsMono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Michelle Setúbal',
  description: 'Brazilian Software Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={` ${jetBrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
