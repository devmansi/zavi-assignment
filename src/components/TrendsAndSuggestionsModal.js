import React from "react";

import Trending from "./TrendingList";
import Suggestions from "./SuggestionList";

export default function TrendsAndSuggestionsModal({ onBackgroundClick }) {
  function handleClick(e) {
    if (
      e.target.classList.contains("search-bar") ||
      e.target.closest(".search-bar") ||
      e.target.classList.contains("trending-popular-modal") ||
      e.target.closest(".trending-popular-modal")
    ) {
      return;
    }

    onBackgroundClick();
  }

  /**
   * it is used for all the work that needs to be done outside of the component,
   * the return function will run when the component will unmount.
   * if you dont use useEffect then you'll be adding event listener
   * on the window evertime the component rerenders and that will be taking memory unnecessarily.
   */
  React.useEffect(() => {
    window.addEventListener("click", handleClick);

    // it will be invoked when the component unmounts
    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="modal">
      <div className="trending-popular-modal">
        <Trending />
        <Suggestions />
      </div>
    </div>
  );
}
