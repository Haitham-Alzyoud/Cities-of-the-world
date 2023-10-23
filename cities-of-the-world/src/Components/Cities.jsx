import React from 'react';
import citiesData from './data'; 

function Cities({ selectedCountry }) {
  const filteredCities = citiesData.filter(city => city.country === selectedCountry);

  return (
    <div className="cities-container">
      <h2>Cities in {selectedCountry}</h2>
      <div className="city-cards">
        {filteredCities.map(city => (
          <div key={city.name} className="city-card">
            <h3>{city.name}</h3>
            <img src={city.image} alt={city.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;
