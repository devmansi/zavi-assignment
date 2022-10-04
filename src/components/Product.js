import React from "react";

import { BsHeartFill, BsHeart } from "react-icons/bs";
import { ratingsData } from "../data";

export default function Product({ product }) {
  const [isFavourite, setIsFavourite] = React.useState(false);

  return (
    <div className="product">
      <div className="product-img-container">
        <img src={product.imgUrl} className="product-img " alt="product-img " />
        {isFavourite ? (
          <BsHeartFill
            className="heart red-heart"
            onClick={() => {
              return setIsFavourite(false);
            }}
          />
        ) : (
          <BsHeart
            className="heart"
            onClick={() => {
              return setIsFavourite(true);
            }}
          />
        )}
      </div>
      <div className="product-details">
        <p className="product-name">{product.productName}</p>
        <div className="price">
          <span className="original-price">Rs.{product.originalPrice}</span>
          <span className="discounted-price">Rs.{product.discountedPrice}</span>
        </div>
        <div className="rating-reviews">
          <span>{ratingsData[product.rating - 1]}</span>
          <span className="reviews">({product.noOfReviews})</span>
        </div>
      </div>
    </div>
  );
}
