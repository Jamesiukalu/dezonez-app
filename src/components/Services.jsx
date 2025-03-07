export default function Services() {
    const services = [
      {
        title: "POP Ceilings",
        description:
          "Elevate your home’s aesthetics with our expertly crafted POP ceilings. We offer a variety of designs, from classic to modern, to suit your taste. Our durable and seamless finishes add elegance and sophistication to any room.",
      },
      {
        title: "Electrical Installations",
        description:
          "Ensure your home is powered safely and efficiently with our professional electrical installation services. From wiring to fittings, we provide reliable solutions tailored to your needs.",
      },
      {
        title: "Tiling",
        description:
          "Transform your floors and walls with our premium tiling services. Whether it’s ceramic, porcelain, or mosaic, we deliver flawless installations that combine beauty and durability.",
      },
      {
        title: "Painting & Wall Finishing",
        description:
          "Refresh your home with our wide range of painting services. From satin to matt finishes, we use high-quality paints to give your walls a smooth, long-lasting look. Our wall screeding services ensure a perfect base for painting.",
      },
      {
        title: "House Interiors",
        description:
          "Complete your home’s look with our interior finishing services. We offer custom furniture settings, stylish curtains, TV consoles, and more to create a cohesive and inviting space.",
      },
      {
        title: "Rough Walls & Terrine",
        description:
          "Prepare your walls for a flawless finish with our rough wall and terrine services. We ensure a smooth and even surface, ready for painting or other finishes.",
      },
    ];
  
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide a wide range of home improvement services to transform
              your space into a masterpiece.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }