import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for links
import searchImg from "../images/search_icon.svg";

function SearchPage({ workshops = [], case_studies = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Combine data in a single function to avoid duplicating it
  const getCombinedData = () => [
    ...workshops.map(item => ({ ...item, type: 'workshops' })),
    ...case_studies.map(item => ({ ...item, type: 'casestudy' })),
  ];

  useEffect(() => {
    const combinedData = getCombinedData();
    
    if (combinedData.length > 0) {
      setSearchResults(combinedData);
      setLoading(false);
    } else {
      setError('No data available');
      setLoading(false);
    }
  }, [workshops, case_studies]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Correctly set search query here

    // Filter based on search query after updating
    const combinedData = getCombinedData();
    const filteredResults = combinedData.filter((result) =>
      result.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  // Use console log in useEffect to debug the latest query value
  useEffect(() => {
    console.log(`Updated search query: ${searchQuery}`);
  }, [searchQuery]);

  return (
    <div className="search-page">
      <div>
        <div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch} // Calls handleSearch on input change
            />
            <div className="search-btn">
              <img src={searchImg} alt="Search Icon" />
            </div>
          </div>
          <h3>Search Results</h3>
          {/* Display search results */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <li key={result.id}>
                    <NavLink to={`/${result.type.toLowerCase()}`}>
                      {result.title} ({result.type})
                    </NavLink>
                  </li>
                ))
              ) : (
                <p>No results found</p>
              )}
            </ul>
          )}
          {/* Display error */}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
