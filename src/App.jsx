import { useState, useEffect } from 'react';
import CompanyList from './components/CompanyList';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import { fetchCompanies } from './services/api';
import { applyFilters, getUniqueValues } from './utils/filterUtils';
import {Link} from 'react-router-dom'


function App() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    organizationType: '',
    ownershipStructure: '',
    industry: '',
    geographicalScope: '',
    governanceModel: ''
  });
  const [viewMode, setViewMode] = useState('grid');
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  
  // Fetch data from Airtable
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCompanies();
        setCompanies(data);
        setFilteredCompanies(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);




  // Filter and sort companies
  useEffect(() => {
    const result = applyFilters(companies, searchTerm, filters);
    setFilteredCompanies(result);
  }, [companies, searchTerm, filters]);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Show autocomplete if at least 2 characters are typed
    if (value.length >= 2) {
      const matches = companies
        .filter(company => company.name?.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5)
        .map(company => company.name);
      setAutocompleteResults(matches);
      setShowAutocomplete(matches.length > 0);
    } else {
      setShowAutocomplete(false);
    }
  };

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      organizationType: '',
      ownershipStructure: '',
      industry: '',
      geographicalScope: '',
      governanceModel: ''
    });
    setSearchTerm('');
  };

  // Handle view mode toggle
  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  // Select autocomplete suggestion
  const selectAutocomplete = (value) => {
    setSearchTerm(value);
    setShowAutocomplete(false);
  };

  // Loading state
  if (loading) {
    return <LoadingState />;
  }

  // Error state
  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="app-container">
      <h1 className="title">Company Directory</h1>
      
      <div className="app-layout">
        {/* Sidebar with filters */}
        <Filters 
          filters={filters}
          handleFilterChange={handleFilterChange}
          getUniqueValues={(field) => getUniqueValues(companies, field)}
        />
        
        {/* Main content area */}
        <div className="main-content">
          <SearchBar 
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            autocompleteResults={autocompleteResults}
            showAutocomplete={showAutocomplete}
            selectAutocomplete={selectAutocomplete}
          />
          
          <CompanyList 
            filteredCompanies={filteredCompanies}
            viewMode={viewMode}
            resetFilters={resetFilters}
          />
        </div>
      </div>
    </div>
  );
}

export default App;