export default function Portfolio() {
    const projects = [
      {
        id: 1,
        title: 'Modern Living Room',
        description: 'A sleek and contemporary living room design with custom furniture.',
        image: 'https://via.placeholder.com/600x400',
      },
      {
        id: 2,
        title: 'Elegant Kitchen',
        description: 'A fully renovated kitchen with premium finishes and modern appliances.',
        image: 'https://via.placeholder.com/600x400',
      },
      {
        id: 3,
        title: 'Cozy Bedroom',
        description: 'A warm and inviting bedroom with custom lighting and wall finishes.',
        image: 'https://via.placeholder.com/600x400',
      },
    ];
  
    return (
      <div className="p-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Portfolio</h2>
          <p className="mt-4 text-gray-600 text-center">
            Explore some of our recent projects and see how we’ve transformed spaces.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="rounded-lg shadow-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }