import { useParams } from 'react-router-dom';
import { products } from '../utils/product'; 

export default function ServicePage() {
  const { serviceId } = useParams(); // Get the serviceId from the URL
  const service = products.find((product) => product.href === `/services/${serviceId}`);

  if (!service) {
    return <div className="text-center py-16">Service not found.</div>;
  }

  return (
    <div className="p-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Service Title */}
        <h1 className="text-4xl font-bold text-gray-900 text-center">{service.name}</h1>

        {/* Service Description */}
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          {service.description}
        </p>

        {/* Image or Video Section */}
        <div className="mt-8">
          {service.video ? (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={service.video}
                title={service.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/get-a-quote"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get a Quote
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}