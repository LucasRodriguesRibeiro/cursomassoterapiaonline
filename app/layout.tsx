import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || 'https://cursomassoterapiaonline.com.br'),
  title: {
    template: '%s | Massoterapia Pro',
    default: 'Curso de Massoterapia Online: Vale a Pena? É Reconhecido?',
  },
  description: 'Descubra se o curso de massoterapia online vale a pena, se é reconhecido e como funciona. Review completa e sincera.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Massoterapia Pro',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-gray-800 antialiased`} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
