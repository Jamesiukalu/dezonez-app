import React, { useState } from 'react';

export default function Portfolio() {
  // Generate video and image file names dynamically
  const videos = Array.from({ length: 36 }, (_, i) => `vid${i + 1}.mp4`);
  const images = Array.from({ length: 15 }, (_, i) => `image${i + 1}.jpg`);

  // State to manage active tab
  const [activeTab, setActiveTab] = useState('videos');

  // State to manage image preview
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Portfolio</h2>
        <p className="mt-4 text-gray-600 text-center">
          Explore some of our recent projects and see how we’ve transformed spaces.
        </p>

        {/* Tab Navigation */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-2 rounded-full text-lg font-semibold ${
              activeTab === 'videos'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveTab('images')}
            className={`px-6 py-2 rounded-full text-lg font-semibold ${
              activeTab === 'images'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Images
          </button>
        </div>

        {/* Video Gallery */}
        {activeTab === 'videos' && (
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="rounded-lg shadow-lg overflow-hidden">
                  <video
                    controls
                    className="w-full h-48 object-cover"
                    src={`/src/assets/videos/${video}`}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-4">
                    <p className="text-lg font-semibold text-gray-900">Project Video {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Gallery */}
        {activeTab === 'images' && (
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(`/src/assets/videos/${image}`)}
                >
                  <img
                    src={`/src/assets/videos/${image}`} 
                    alt={`Project Image ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold text-gray-900">Project Image {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Preview Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full p-4">
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}