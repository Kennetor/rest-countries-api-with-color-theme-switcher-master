import React, { useState, useEffect } from "react";
// Components
import { Navbar } from "./components/navbar";
import Country from "./components/country";
import CountryDetails from "./components/countryDetails";
import FilterRegion from "./components/regionFilter";
import { SearchInput } from "./components/searchInput";
import { ThemeProvider } from "./components/themeContext";
import { useTheme, useThemeUpdate } from "./components/themeContext";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const colorTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  function handleCountryClick(country) {
    setSelectedCountry(country);
  }

  function handleRegionChange(region) {
    setSelectedRegion(region);
  }

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  function filterCountries() {
    const filteredCountries = countries.filter((country) => {
      if (selectedRegion && country.region !== selectedRegion) {
        return false;
      }
      if (searchInput !== "") {
        return country.name.common
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      }
      return true;
    });
    return filteredCountries;
  }

  const filteredCountries = filterCountries();

  return (
    <ThemeProvider>
      <Navbar />

      <div
        className="absolute w-full"
        style={{
          background: "#202c37",
        }}
      >
        {selectedCountry === null && (
          <>
            <SearchInput onChange={handleSearchInput} />
            <FilterRegion onRegionChange={handleRegionChange} />
          </>
        )}

        {selectedCountry ? (
          <CountryDetails country={selectedCountry} allCountries={countries} />
        ) : (
          <div className="flex justify-around">
            <div className="grid lg:grid-cols-4 gap-12">
              {filteredCountries.map((country) => (
                <Country
                  key={country.name.common}
                  country={country}
                  handleCountryClick={handleCountryClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
