import React, { useEffect } from 'react';

const ParallaxSection = ({ backgroundImage, title = '', items = [] }) => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxBg = document.querySelector('.parallax-bg');
      if (parallaxBg) {
        const scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background - Updated with fixed positioning */}
      <div 
        className="parallax-bg fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform'
        }}
      ></div>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-xl p-8 md:p-12">
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