// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSelectedImage } from '../../features/imageSlice';

// const ImageGallery = ({ images }) => {
//   const dispatch = useDispatch();
//   const selectedImage = useSelector((state) => state.image.selectedImage);

//   // Set the first image when images array changes (e.g., when navigating)
//   useEffect(() => {
//     if (images.length > 0) {
//       dispatch(setSelectedImage(images[0].src));
//     }
//   }, [dispatch, images]);

//   return (
//     <div className="flex flex-col items-center space-y-6">
//       {/* Big Image Section */}
//       <div className="w-full max-w-3xl h-[400px] flex items-center justify-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
//         {selectedImage && (
//           <img
//             src={selectedImage}
//             alt="Big Display"
//             className="max-h-full max-w-full object-contain"
//           />
//         )}
//       </div>

//       {/* Thumbnails */}
//       {/* <div className="flex space-x-4">
//         {images.map((image) => (
//           <img
//             key={image.id}
//             src={image.thumbnail}
//             alt={`Thumbnail ${image.id}`}
//             className={`w-24 h-24 object-cover cursor-pointer rounded-lg shadow-md transition-transform ${
//               selectedImage === image.src ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-110'
//             }`}
//             onClick={() => dispatch(setSelectedImage(image.src))}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default ImageGallery;


import React, { useEffect, useState } from 'react';

const ImageGallery = ({ images, initialImageSrc }) => {
  const [selectedImage, setSelectedImage] = useState(
    initialImageSrc || images[0]?.src
  );

  // Update selected image when the initialImageSrc changes (e.g., new page load)
  useEffect(() => {
    if (initialImageSrc) {
      setSelectedImage(initialImageSrc);
    } else if (images.length > 0) {
      setSelectedImage(images[0].src);
    }
  }, [initialImageSrc, images]);

  // Show only first 3 thumbnails
  const thumbnails = images.slice(0, 3);

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Big Image */}
      <div className="w-full max-w-3xl h-[400px] flex overflow-hidden">
        <img
          src={selectedImage}
          alt="Selected"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Thumbnails */}
      {/* <div className="flex space-x-4">
        {thumbnails.map((image) => (
          <img
            key={image.id}
            src={image.thumbnail}
            alt={`Thumbnail ${image.id}`}
            className={`w-24 h-24 object-cover cursor-pointer rounded-lg shadow-md transition-transform
              ${selectedImage === image.src ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-110'}`}
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageGallery;
