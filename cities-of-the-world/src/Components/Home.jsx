import React, { useState } from 'react';
import Cities from './Cities';

import citiesData from '../Data';

// function Home() {
//   const [selectedCountry, setSelectedCountry] = useState('');

//   const handleCountryChange = (event) => {
//     setSelectedCountry(event.target.value);
//   };
//   const uniqeCountries = Array.from(new Set(citiesData.map(city => city.country)));
//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         {/* Add your hero section content here */}
//       </div>
//       <div className="country-dropdown">
//         <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
//           Select a Country 
//           <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
//           </svg>
//         </button>
//         <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//           <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
//             {uniqeCountries.map(country => (
//               <li key={country}>
//                 <a href="#"
//                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{country}
//                  onClick={() => handleCountryChange({ target: { value: country } })}
//                  </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {selectedCountry && <Cities selectedCountry={selectedCountry} />}
//     </div>
//   );
// }
function Home() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setIsDropdownOpen(false); // Close the dropdown when a country is selected
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const uniqeCountries = Array.from(new Set(citiesData.map(city => city.country)));

  return (
    <div className="home-container">
      <div className="hero-section">
      </div>
      <div className="country-dropdown">
        <button 
          id="dropdownDefaultButton" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
          type="button"
          onClick={toggleDropdown} // Toggle the dropdown when the button is clicked
        >
          Select a Country 
          <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div 
          id="dropdown" 
          className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            {uniqeCountries.map(country => (
              <li key={country}>
                <a 
                  href="#" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleCountryChange({ target: { value: country } })}
                >
                  {country}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selectedCountry && <Cities selectedCountry={selectedCountry} />}
    </div>
  );
}
export default Home;
