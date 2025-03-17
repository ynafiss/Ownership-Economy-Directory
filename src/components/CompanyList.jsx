import CompanyCard from './CompanyCard';




function CompanyList({ filteredCompanies, viewMode, resetFilters }) {
  return (
    <div className="results-container">
      <div className="results-header">
        <h2 className="title">
          Results <span className="results-count">(<strong>{filteredCompanies.length}</strong> companies)</span>
        </h2>
      </div>
      
      {filteredCompanies.length === 0 ? (
        <div className="empty-state animate-fade-in">
          <div className="empty-state-icon">📂</div>
          <h3>No Companies Found</h3>
          <p>
            No companies match your current search and filter criteria. 
            Try adjusting your filters or search term.
          </p>
          <button className="card-btn btn-primary" onClick={resetFilters}>
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className={`company-list ${viewMode === 'list' ? 'list-view' : ''}`}>
          {filteredCompanies.map(company => (
            <CompanyCard  key={company.id} company={company} />

          ))}
        </div>
      )}
    </div>
  );
}

export default CompanyList;