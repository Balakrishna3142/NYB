function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All Cities</option>
        <option value="Gwenborough">Gwenborough</option>
        <option value="Wisokyburgh">Wisokyburgh</option>
        <option value="McKenziehaven">McKenziehaven</option>
      </select>
    </div>
  );
}

export default SearchFilter;