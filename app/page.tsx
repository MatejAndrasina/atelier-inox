import type { Metadata } from 'next';
import AtelierInoxPage from '@/components/atelier-inox-page';

export const metadata: Metadata = {
  title: 'Atelier Inox — Nerezové modulární nádoby | Rodinná výroba Brno',
  description:
    'Modulární nerezové nádoby z oceli AISI 304 pro terasy, zahrady a veřejná prostranství. Zateplení, samozavlažování, rozměry na míru. Rodinná výroba Brno.',
};

export default function HomePage() {
  return <AtelierInoxPage />;
}
