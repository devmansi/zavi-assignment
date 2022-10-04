import React from "react";

import Suggestion from "./SuggestionItem";
import { suggestionsData } from "../data";

export default function Suggestions() {
  return (
    <section className="popular-section">
      <h2 className="secondary-heading">Popular Suggestion</h2>
      <div className="popular-suggestions">
        {suggestionsData.map((suggestion, key) => {
          return <Suggestion suggestion={suggestion} key={key} />;
        })}
      </div>
    </section>
  );
}
