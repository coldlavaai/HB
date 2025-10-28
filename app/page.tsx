import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import GlobalFootprint from '@/components/GlobalFootprint';
import ByTheNumbers from '@/components/ByTheNumbers';
import CareerTimeline from '@/components/CareerTimeline';
import SaihamCaseStudy from '@/components/SaihamCaseStudy';
import BusinessVision from '@/components/BusinessVision';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Journey />
      <GlobalFootprint />
      <CareerTimeline />
      <SaihamCaseStudy />
      <BusinessVision />
      <ByTheNumbers />
      <Skills />
      <Contact />
    </main>
  );
}
