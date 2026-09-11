import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { WhyVexis } from '@/sections/WhyVexis';
import { Portfolio } from '@/sections/Portfolio';
import { Process } from '@/sections/Process';
import { CTA } from '@/sections/CTA';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Privacy } from '@/sections/Privacy';

function App() {
  const isPrivacyPage = window.location.pathname === '/privacy';

  if (isPrivacyPage) {
    return <Privacy />;
  }

  return (
    <div className="min-h-screen bg-vexis-black text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyVexis />
        <Portfolio />
        <Process />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;