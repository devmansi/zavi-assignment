import React from "react";
import { FiSearch } from "react-icons/fi";
import TrendsAndSuggestionsModal from "./TrendsAndSuggestionsModal";

export default function Search({ onProductSearch }) {
  const [searchString, setSearchString] = React.useState("");
  const [isTrendsAndSuggestionsModalOpen, setIsTrendsAndSuggestionsModalOpen] =
    React.useState(false);

  function search() {
    if (!searchString) {
      return;
    }

    setIsTrendsAndSuggestionsModalOpen(false);
    onProductSearch(searchString);
  }

  function SearchByEnter(e) {
    if (!(e.key === "Enter")) {
      return;
    }

    search();
  }

  function showTrendsAndSuggestionsModal() {
    setIsTrendsAndSuggestionsModalOpen(true);
  }

  function handleBackgroundClick() {
    setIsTrendsAndSuggestionsModalOpen(false);
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          onClick={showTrendsAndSuggestionsModal}
          onKeyPress={SearchByEnter}
        />
        <FiSearch className="search-icon" onClick={search} />
      </div>
      {isTrendsAndSuggestionsModalOpen && (
        <TrendsAndSuggestionsModal onBackgroundClick={handleBackgroundClick} />
      )}
    </>
  );
}
