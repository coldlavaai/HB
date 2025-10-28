import Hero from '@/components/Hero';
import CareerTimeline from '@/components/CareerTimeline';
import GlobalFootprint from '@/components/GlobalFootprint';
import ByTheNumbers from '@/components/ByTheNumbers';
import SaihamCaseStudy from '@/components/SaihamCaseStudy';
import BusinessVision from '@/components/BusinessVision';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <CareerTimeline />
      <GlobalFootprint />
      <SaihamCaseStudy />
      <BusinessVision />
      <ByTheNumbers />
      <Skills />
      <Contact />
    </main>
  );
}
