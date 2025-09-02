const ProductCard = ({ imageSrc, description, title, onClick }) => {
  return (
    <div onClick={onClick} className=" px-1 cursor-pointer">
      <div className="text-center h-full">
        <img
          src={imageSrc}
          alt={description}
          className="w-full h-60 object-cover" // Keep images responsive
        />
        <div className="py-4">
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
