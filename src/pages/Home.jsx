import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Brands from '../components/Brands';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Newsletter from '../components/Newsletter';
import Stats from '../components/Stats';
import Services from '../components/Services';

export default function Home() {
    return (
      <div className="p-0">
        <Hero />
        <Services />
        <Brands />
        <Testimonials />
        <Stats />
        <Pricing />
        <Newsletter />
        <Contact />
      </div>
    );
  }