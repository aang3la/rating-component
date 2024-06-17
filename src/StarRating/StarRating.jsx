import "./StarRating.css";
import { useState, useEffect } from "react";
import filled_star from "../assets/filled_star.png";
import empty_star from "../assets/empty_star.png";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    const storedRating = sessionStorage.getItem("rating");
    if (storedRating) {
      setRating(parseInt(storedRating));
    }
  }, []);

  const handleClick = (value) => {
    setRating(value);
    sessionStorage.setItem("rating", value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <img
          key={starValue}
          src={starValue <= (hoverRating || rating) ? filled_star : empty_star}
          alt={starValue}
          className="star"
          onClick={() => handleClick(starValue)}
          onMouseEnter={() => handleMouseEnter(starValue)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default StarRating;
