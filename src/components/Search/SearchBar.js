import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchTags } from "../../slices/tagSlice";
import debounce from "lodash/debounce";
import { SearchContainer, SearchInput } from "./style";

function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      dispatch(searchTags(searchQuery));
    }, 300),
    [dispatch]
  );

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    debouncedSearch(searchQuery);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="type for search tags..."
      />
    </SearchContainer>
  );
}

export default SearchBar;
