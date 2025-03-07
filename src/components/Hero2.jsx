export default function Hero({ title, subtitle, description, backgroundImage }) {
    return (
      <div className="relative bg-gray-900">
        {/* Background Image (Optional) */}
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        )}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-indigo-200">{subtitle}</p>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              {description}
            </p>
            {/* Optional Call-to-Action Button */}
            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }