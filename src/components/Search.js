import React from "react";
import { FiSearch } from "react-icons/fi";
import Modal from "./Modal";

export default function Search({ onProductSearch }) {
  const [searchString, setSearchString] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function search() {
    if (!searchString) {
      return;
    }
    setIsModalOpen(false);
    onProductSearch(searchString);
  }

  function SearchByEnter(e) {
    if (!(e.key === "Enter") || !searchString) {
      return;
    }

    setIsModalOpen(false);
    onProductSearch(searchString);
  }

  function showModal() {
    setIsModalOpen(true);
  }

  function handleBackgroundClick() {
    setIsModalOpen(false);
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
          onClick={showModal}
          onKeyPress={SearchByEnter}
        />
        <FiSearch className="search-icon" onClick={search} />
      </div>
      <div className="home-page">
        {isModalOpen && <Modal onBackgroundClick={handleBackgroundClick} />}
      </div>
    </>
  );
}
