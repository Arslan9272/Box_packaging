import React, { useEffect, useState } from "react";

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
      <div className="w-full max-w-3xl h-[500px] flex overflow-hidden">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-cover"
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
