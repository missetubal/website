import Image from 'next/image';
import { Header, Hero } from '../components/custom';

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        {/* <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection /> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
