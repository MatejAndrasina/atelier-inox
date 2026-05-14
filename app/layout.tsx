import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atelier Inox — Nerezové modulární nádoby | Rodinná výroba Brno',
  description:
    'Modulární nerezové nádoby z oceli AISI 304 pro terasy, zahrady a veřejná prostranství. Zateplení, samozavlažování, rozměry na míru. Rodinná výroba Brno.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={jakarta.variable}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
