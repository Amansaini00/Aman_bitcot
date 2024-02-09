import React, { useState } from "react";

const SearchContact = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Contact"
      />
      <button onClick={handleSearch} className="search-btn">
        Search
      </button>
    </div>
  );
};

export default SearchContact;
