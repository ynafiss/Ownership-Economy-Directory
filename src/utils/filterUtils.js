/**
 * Apply filters to the company data
 * @param {Array} companies - Array of company objects
 * @param {String} searchTerm - Search term for company name
 * @param {Object} filters - Object containing filter values
 * @returns {Array} - Filtered array of companies
 */
export const applyFilters = (companies, searchTerm, filters) => {
    let result = companies;
    
    // Filter by search term (company name)
    if (searchTerm) {
      result = result.filter(company => 
        company.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply filters - with null/undefined checks
    if (filters.organizationType) {
      result = result.filter(company => 
        company.type_of_organization === filters.organizationType
      );
    }
    
    if (filters.ownershipStructure) {
      result = result.filter(company => 
        company.ownership_structure && 
        (Array.isArray(company.ownership_structure) 
          ? company.ownership_structure.includes(filters.ownershipStructure)
          : company.ownership_structure === filters.ownershipStructure)
      );
    }
    
    if (filters.industry) {
      result = result.filter(company => 
        company.industry && 
        (Array.isArray(company.industry) 
          ? company.industry.includes(filters.industry)
          : company.industry === filters.industry)
      );
    }
    
    if (filters.geographicalScope) {
      result = result.filter(company => 
        company.geographical_scope === filters.geographicalScope
      );
    }
    
    if (filters.governanceModel) {
      result = result.filter(company => 
        company.governance_model === filters.governanceModel
      );
    }
    
    return result;
  };
  
  /**
   * Get unique values for a field across all companies
   * @param {Array} companies - Array of company objects
   * @param {String} field - Field name to extract unique values from
   * @returns {Array} - Array of unique values
   */
  export const getUniqueValues = (companies, field) => {
    const values = new Set();
    
    companies.forEach(company => {
      if (!company[field]) return;
      
      if (Array.isArray(company[field])) {
        company[field].forEach(value => {
          if (value) values.add(value);
        });
      } else {
        values.add(company[field]);
      }
    });
    
    return Array.from(values).sort();
  };