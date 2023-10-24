import React from 'react';
import citiesData from '../Data'; 

function Cities({ selectedCountry }) {
  const filteredCities = citiesData.filter(city => city.country === selectedCountry);

  return (
    <div className="cities-container justify-center">
      <h2>Cities in {selectedCountry}</h2>
      <div className="city-cards flex justify-around flex-wrap ">
        {filteredCities.map(city => (
          <div key={city.name} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
            <a href="#">
              <img className="rounded-t-lg  h-72  w-96" src={city.image} alt={city.name} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{city.name}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{city.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;
