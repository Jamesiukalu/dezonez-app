export default function GetAQuote() {
    return (
      <div className="p-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">Get a Quote</h2>
          <p className="mt-4 text-gray-600 text-center">
            Fill out the form below, and we’ll get back to you with a customized quote.
          </p>
          <form className="mt-8 space-y-6 max-w-2xl mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                Service
              </label>
              <select
                id="service"
                name="service"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select a service</option>
                <option value="POP Ceilings">POP Ceilings</option>
                <option value="Electrical Installations">Electrical Installations</option>
                <option value="Tiling">Tiling</option>
                <option value="Painting & Wall Finishing">Painting & Wall Finishing</option>
                <option value="House Interiors">House Interiors</option>
                <option value="Rough Walls & Terrine">Rough Walls & Terrine</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }