import React from "react";

import { trendsData } from "../data";
import TrendingItem from "./TrendingItem";

export default function Trending() {
  return (
    <section className="trending-section">
      <h2 className="secondary-heading">Latest Trends</h2>
      <div className="trending-clothes-container">
        {trendsData.map((item) => {
          return <TrendingItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
