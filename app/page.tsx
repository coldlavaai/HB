import Hero from '@/components/Hero';
import GlobalFootprint from '@/components/GlobalFootprint';
import ByTheNumbers from '@/components/ByTheNumbers';
import CareerTimeline from '@/components/CareerTimeline';
import SaihamCaseStudy from '@/components/SaihamCaseStudy';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <GlobalFootprint />
      <ByTheNumbers />
      <CareerTimeline />
      <SaihamCaseStudy />
      <Skills />
      <Contact />
    </main>
  );
}
