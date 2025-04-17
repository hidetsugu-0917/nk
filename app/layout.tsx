import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Noto_Sans_JP, Lato, Montserrat } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: true,
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'エヌ・ケー | NK Corporation',
  description: 'Built on Precision. Delivering Trust.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${poppins.variable} ${notoSansJP.variable} ${lato.variable} ${montserrat.variable} font-montserrat`}>
        {children}
      </body>
    </html>
  );
}