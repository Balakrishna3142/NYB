function Search({ search, setSearch }) {
  return (
    <input
      placeholder="Search..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}

export default Search;