import React, { useState } from 'react';
import Cities from './Cities';

import citiesData from './Data';

function Home() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        {/* Add your hero section content here */}
      </div>
      <div className="country-dropdown">
        <label htmlFor="country-select">Select a Country:</label>
        <select 
          id="country-select" 
          value={selectedCountry} 
          onChange={handleCountryChange}
        >
          <option value="">Select</option>
          {citiesData.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      {selectedCountry && <Cities selectedCountry={selectedCountry} />}
    </div>
  );
}

export default Home;
