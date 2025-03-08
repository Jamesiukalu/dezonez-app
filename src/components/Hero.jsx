import backgroundImage from "../assets/image.webp";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-0 lg:px-8 ">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-[-1]"
      />
      <div className="absolute inset-0" />
      <div className="mx-auto max-w-2xl py-24 sm:py-24 lg:py-36">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-700 ring-1 ring-gray-400 hover:ring-gray-900/10 bg-[#F2F1EF]">
            Ready to transform your home? {"  "}
            <Link to="/get-a-quote" className="font-semibold text-gray-800">
              <span aria-hidden="true" className="absolute inset-0" />
              Get a free quote today! <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Let’s build your dream home together
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8">
            Transforming Houses into Dream Homes – Expert POP Ceilings, Tiling,
            Painting, and Interior Finishing Services.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/get-a-quote" className="rounded-md bg-[#F2F1EF] text-gray-800 px-3.5 py-2.5 text-md shadow-xs hover:bg-[#F2F1EF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Get started <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              to="/get-a-quote"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
