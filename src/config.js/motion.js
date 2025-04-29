// Helper function to generate corner flip animations
const generateFlipCorners = (
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    translateY
  ) => ({
    "0%": {
      borderTopLeftRadius: topLeft,
      borderTopRightRadius: topRight,
      borderBottomLeftRadius: bottomLeft,
      borderBottomRightRadius: bottomRight,
      transform: `translateY(0)`, // No movement initially
    },
    "100%": {
      borderTopLeftRadius: topLeft,
      borderTopRightRadius: topRight,
      borderBottomLeftRadius: bottomLeft,
      borderBottomRightRadius: bottomRight,
      transform: `translateY(${translateY})`, // Move up slightly
    },
  });
  
  export const cardAnimations = {
    // Flip the top-left and bottom-right corners
    flipCorners: generateFlipCorners("3rem", "0rem", "0rem", "3rem", "-30px"),
  
    // Flip the top-right and bottom-left corners
    flipCornersBack: generateFlipCorners("0rem", "3rem", "3rem", "0rem", "-10px"),
  };
  