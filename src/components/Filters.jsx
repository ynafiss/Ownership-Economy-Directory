function Filters({ filters, handleFilterChange, getUniqueValues }) {
    return (
      <div className="filters-container">
        <div className="filters-header">
          <div className="filters-title">Filters</div>
        </div>
        
        <div className="filter">
          <label htmlFor="org-type">Organization Type</label>
          <select 
            id="org-type"
            className="select-box"
            value={filters.organizationType} 
            onChange={(e) => handleFilterChange('organizationType', e.target.value)}
          >
            <option value="">All Types</option>
            {getUniqueValues('type_of_organization').map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div className="filter">
          <label htmlFor="ownership">Ownership Structure</label>
          <select 
            id="ownership"
            className="select-box"
            value={filters.ownershipStructure} 
            onChange={(e) => handleFilterChange('ownershipStructure', e.target.value)}
          >
            <option value="">All Structures</option>
            {getUniqueValues('ownership_structure').map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div className="filter">
          <label htmlFor="industry">Industry</label>
          <select 
            id="industry"
            className="select-box"
            value={filters.industry} 
            onChange={(e) => handleFilterChange('industry', e.target.value)}
          >
            <option value="">All Industries</option>
            {getUniqueValues('industry').map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div className="filter">
          <label htmlFor="geo-scope">Geographic Scope</label>
          <select 
            id="geo-scope"
            className="select-box"
            value={filters.geographicalScope} 
            onChange={(e) => handleFilterChange('geographicalScope', e.target.value)}
          >
            <option value="">All Scopes</option>
            {getUniqueValues('geographical_scope').map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div className="filter">
          <label htmlFor="governance">Governance Model</label>
          <select 
            id="governance"
            className="select-box"
            value={filters.governanceModel} 
            onChange={(e) => handleFilterChange('governanceModel', e.target.value)}
          >
            <option value="">All Models</option>
            {getUniqueValues('governance_model').map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        {/* Active filters */}
        {Object.values(filters).some(v => v !== '') && (
          <div className="active-filters">
            {Object.entries(filters).map(([key, value]) => (
              value && (
                <div key={key} className="filter-chip">
                  {value}
                  <span 
                    className="remove-filter"
                    onClick={() => handleFilterChange(key, '')}
                  >
                    ×
                  </span>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Filters;