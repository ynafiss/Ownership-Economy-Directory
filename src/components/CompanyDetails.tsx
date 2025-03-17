import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { 
  UserGroupIcon, 
  GlobeAltIcon, 
  CurrencyDollarIcon, 
  BuildingOfficeIcon,
  CheckBadgeIcon,
  LinkIcon,
  EnvelopeIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import './CompanyDetails.css';

// Simple component to display a badge
const Badge = ({ children, className = '' }) => (
  <span className={`badge ${className}`}>
    {children}
  </span>
);

export default function CompanyDetail() {
  const { company } = useLoaderData();
  // Helper function to check if a value should be displayed
  const shouldDisplay = (value) => {
    return value !== undefined && value !== null && value !== 'N/A' && value !== '';
  };

  // Define organization type badge color
  const getTypeColor = (type) => {
    const types = {
      'Cooperative': 'badge-blue',
      'DAO': 'badge-purple',
      'Nonprofit': 'badge-green',
      'Social Enterprise': 'badge-orange',
      'Foundation': 'badge-yellow',
      'Network': 'badge-red',
    };
    
    return types[type] || 'badge-slate';
  };

  // Extract website domain for display
  const getDomainFromUrl = () => {
    if (company.name) {
      return company.name;
    }
    if (company.website) {
      return company.website.replace(/^https?:\/\//, '');
    }
    return "Company";
  };

  return (
    <div className="container">
      <article className="company-card">
        {/* Header Section */}
        <div className="center card-header">
          <div className="header-title-wrapper">
            <h1 className="company-title">{getDomainFromUrl()}</h1>
            {shouldDisplay(company.type_of_organization) && (
              <Badge className={getTypeColor(company.type_of_organization)}>
                {company.type_of_organization}
              </Badge>
            )}
          </div>
          
          {shouldDisplay(company.description) && (
            <p className="company-description">{company.description}</p>
          )}
          
          <div className="company-meta">
            {shouldDisplay(company.year_founded) && (
              <Badge className="badge-slate">
                Founded {company.year_founded}
              </Badge>
            )}
            {shouldDisplay(company.headquarters_country) && (
              <Badge className="badge-slate">
                HQ: {company.headquarters_country}
              </Badge>
            )}
            {shouldDisplay(company.industry) && (
              <Badge className="badge-slate">
                {company.industry}
              </Badge>
            )}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="card-body">
          {/* Left Column */}
          <div className="leftSide">
            <h2 className="section-title">Organization Details</h2>
            
            {shouldDisplay(company.legal_structure) && (
              <div className="detail-item">
                <h3 className="detail-label">
                  <BuildingOfficeIcon className="icon" aria-hidden="true" />
                  Legal Structure
                </h3>
                <p className="detail-value">{company.legal_structure}</p>
              </div>
            )}
            
            {shouldDisplay(company.size) && (
              <div className="detail-item">
                <h3 className="detail-label">Organization Size</h3>
                <p className="detail-value">{company.size}</p>
              </div>
            )}
            
            {shouldDisplay(company.number_of_owners_members) && (
              <div className="detail-item">
                <h3 className="detail-label">
                  <UserGroupIcon className="icon" aria-hidden="true" />
                  Members/Owners
                </h3>
                <p className="detail-value">{company.number_of_owners_members.toLocaleString()}</p>
              </div>
            )}
            
            {shouldDisplay(company.geographical_scope) && (
              <div className="detail-item">
                <h3 className="detail-label">
                  <GlobeAltIcon className="icon" aria-hidden="true" />
                  Geographic Scope
                </h3>
                <p className="detail-value">{company.geographical_scope}</p>
              </div>
            )}
            
            {shouldDisplay(company.revenue) && (
              <div className="detail-item">
                <h3 className="detail-label">
                  <CurrencyDollarIcon className="icon" aria-hidden="true" />
                  Annual Revenue
                </h3>
                <p className="detail-value">{company.revenue}</p>
              </div>
            )}
          </div>
          
          {/* Right Column */}
          <div className="rightSide">
            {/* Ownership Structure */}
            {shouldDisplay(company.ownership_structure) && company.ownership_structure.length > 0 && (
              <div className="detail-section">
                <h2 className="section-title">Ownership Structure</h2>
                <ul className="ownership-list">
                      <span className="ownership-item">{company.ownership_structure}</span>
                </ul>
              </div>
            )}
            
            {/* Funding Sources */}
            {shouldDisplay(company.funding_sources) && company.funding_sources.length > 0 && (
              <div className="detail-section">
                <h2 className="section-title">Funding Sources</h2>
                <div className="funding-list">
                    <div  className="funding-item">
                      <div className="funding-label">
                        <span>{company.funding_sources}</span>
                      </div>
                    </div>
                </div>
              </div>
            )}
            
            {/* Certifications */}
            {shouldDisplay(company.certifications_affiliations) && company.certifications_affiliations.length > 0 && (
              <div className="detail-section">
                <h2 className="section-title">Certifications & Affiliations</h2>
                <div className="certifications-list">
                    <span className="certification-badge">
                      <CheckBadgeIcon className="icon" aria-hidden="true" />
                      {company.certifications_affiliations}
                    </span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="footer card-footer">
          {/* Tags */}
          {shouldDisplay(company.tags) && company.tags.length > 0 && (
            <div className="footer-section">
              <h3 className="footer-label">
                <TagIcon className="icon" aria-hidden="true" />
                Tags
              </h3>
              <div className="tags-list">
                  <span className="tag-badge">
                    {company.tags}
                  </span>
              </div>
            </div>
          )}
          
          {/* Contact Links */}
          <div className="contact-links">
            {shouldDisplay(company.website) && (
              <a 
                href={company.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                <LinkIcon className="icon" aria-hidden="true" />
                Website
              </a>
            )}
            
            {shouldDisplay(company.email) && (
              <a 
                href={`mailto:${company.email}`}
                className="contact-link"
              >
                <EnvelopeIcon className="icon" aria-hidden="true" />
                {company.email}
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}