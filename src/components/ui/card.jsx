const Card = ({ imageSrc, altText, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[20%] flex-shrink-0 px-1 cursor-pointer"
    >
      <div className="text-center h-full">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-60 object-cover" // Keep images responsive
        />
        <div className="py-2">
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
