import Hero from '../components/Hero2';
import Stats from '../components/Stats';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

export default function AboutUs() {
  return (
    <div>
      <Hero
        title="About Us"
        subtitle="Transforming Homes, One Project at a Time"
        description="We are a team of dedicated professionals passionate about creating beautiful and functional spaces. With years of experience, we bring your vision to life."
        backgroundImage="https://via.placeholder.com/1500x800"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Values</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Quality</h3>
            <p className="mt-4 text-gray-600">
              We use only the best materials and techniques to ensure lasting results.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
            <p className="mt-4 text-gray-600">
              Honesty and transparency are at the core of everything we do.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Customer Focus</h3>
            <p className="mt-4 text-gray-600">
              Your satisfaction is our top priority. We listen and deliver.
            </p>
          </div>
        </div>
      </div>
      <Testimonials />
      <Stats />
      <Newsletter />
    </div>
  );
}