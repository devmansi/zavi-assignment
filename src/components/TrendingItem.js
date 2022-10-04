import React from "react";

export default function TrendingItem({ imgUrl, description }) {
  return (
    <div>
      <img className="trending-cloth-img" src={imgUrl} alt="tranding clothes" />
      <p className="trending-cloth-description">{description}</p>
    </div>
  );
}
