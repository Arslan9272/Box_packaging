import React from 'react';

const ParallaxSection = ({ backgroundImage, title = '', items = [] }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-40 rounded-lg shadow-xl p-8 md:p-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
              {title}
            </h2>
          )}

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <li key={index} className="flex items-start p-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-800">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
