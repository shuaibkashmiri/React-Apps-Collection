const SearchBar = ({ setQuery }) => {
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setQuery(e.target.value);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onKeyDown={handleSearch}
    />
  );
};

export default SearchBar;
