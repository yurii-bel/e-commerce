import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface RatingStarsProps {
  activeStars: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ activeStars }) => {
  // Round the activeStars to the nearest whole number
  const roundedActiveStars = Math.round(activeStars);

  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, index) =>
        index < roundedActiveStars ? (
          <AiFillStar key={index} />
        ) : (
          <AiOutlineStar key={index} />
        )
      )}
    </div>
  );
};

export default RatingStars;
