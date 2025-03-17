import searchIcon from '../assets/search.png';

function SearchBar({ searchTerm, handleSearch, autocompleteResults, showAutocomplete, selectAutocomplete }) {
  return (
    <div className="search-container">
      <span><img className="search-icon" src={searchIcon} alt="Search" /></span>
      <input
        type="text"
        placeholder="Search by company name..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
        aria-label="Search companies"
      />
      
      {/* Autocomplete dropdown */}
      {showAutocomplete && (
        <div className="search-autocomplete active">
          {autocompleteResults.map((result, index) => (
            <div 
              key={index} 
              className="autocomplete-item"
              onClick={() => selectAutocomplete(result)}
            >
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;