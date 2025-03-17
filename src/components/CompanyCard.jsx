import {Link} from 'react-router-dom'


function CompanyCard({ company }) {
    // Get company initial for logo placeholder
    const getCompanyInitial = (name) => {
      return name ? name.charAt(0).toUpperCase() : '?';
    };
  
    // Get badge class based on industry
    const getBadgeClass = (industry) => {
      if (!industry) return 'badge';
      
      const industryLower = industry.toLowerCase();
      if (industryLower.includes('tech') || industryLower.includes('software')) {
        return 'badge badge-tech';
      } else if (industryLower.includes('health') || industryLower.includes('medical')) {
        return 'badge badge-healthcare';
      } else if (industryLower.includes('finance') || industryLower.includes('banking')) {
        return 'badge badge-finance';
      }
      
      return 'badge';
    };
  
    return (
      <div className="company-card animate-fade-in">
        <div className="card-header">
          <div className="company-logo">
            {getCompanyInitial(company.name)}
          </div>
          <h3>{company.name || 'Unnamed Company'}</h3>
          <p className="description">{company.description || 'No description available.'}</p>
          
          {company.industry && (
            <div className="badge-list">
              {Array.isArray(company.industry) 
                ? company.industry.map((ind, i) => (
                    <span key={i} className={getBadgeClass(ind)}>{ind}</span>
                  ))
                : <span className={getBadgeClass(company.industry)}>{company.industry}</span>
              }
            </div>
          )}
        </div>
        <div className="button-box">
          <Link to={company.name} className="details-button">show details</Link>
        </div>
        <div className="company-details">
          <p>
            <strong>Type</strong>
            {company.type_of_organization || 'N/A'}
          </p>
          <p>
            <strong>Founded</strong>
            {company.year_founded || 'N/A'}
          </p>
          <p>
            <strong>Ownership</strong>
            {Array.isArray(company.ownership_structure) 
              ? company.ownership_structure.join(', ') 
              : (company.ownership_structure || 'N/A')}
          </p>
          <p>
            <strong>Location</strong>
            {company.headquarters_country || 'N/A'}
          </p>
          <p>
            <strong>Scope</strong>
            {company.geographical_scope || 'N/A'}
          </p>
          <p>
            <strong>Governance</strong>
            {company.governance_model || 'N/A'}
          </p>
        </div>
      </div>
    );
  }
  
  export default CompanyCard;