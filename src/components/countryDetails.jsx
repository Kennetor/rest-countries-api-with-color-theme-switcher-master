// Components
import { Button } from "./button";

function CountryDetails({ country, allCountries }) {
  console.log(country);

  // Check if country has array with borders, then show first 3
  const borderCountries =
    country.borders && Array.isArray(country.borders)
      ? country.borders.slice(0, 3).map((borderCountryCode) => {
          const borderCountry =
            allCountries &&
            allCountries.find((c) => c.cca3 === borderCountryCode);
          return borderCountry ? borderCountry.name.common : borderCountryCode;
        })
      : [];

  // Lazy return button
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      {" "}
      <Button text="Back" onClick={refreshPage} />
      <div className="md:grid lg:grid-cols-3">
        <div className="mt-16 w-80 md:w-96 m-auto md:m-10">
          <img src={country.flags.svg} alt={`${country.name.common} flag`} />
        </div>
        <div className="ml-10 md:ml-0 mt-8">
          <h2 className="text-5xl font-medium">{country.name.common}</h2>
          <div className="md:grid md:gap-2">
            <p className="mt-4">
              <span className="font-medium">Native Name:</span>{" "}
              {country.altSpellings[1]}
            </p>
            <p>
              <span className="font-bold">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="font-bold">Region:</span> {country.region}
            </p>
            <p>
              <span className="font-bold">Sub Region:</span> {country.subregion}
            </p>
            <p>
              <span className="font-bold">Capital:</span> {country.capital}
            </p>
          </div>
          <div className="md:translate-x-80 md:-mt-[150px] md:grid md:grid-cols-2 md:w-[39rem]">
            <div className="md:grid md:gap-2">
              <p>
                <span className="font-bold">Top Level Domain:</span>{" "}
                {country.tld.join(" ")}
              </p>
              <p>
                <span className="font-bold">Currencies:</span>{" "}
                {Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
              <p>
                <span className="font-bold">Languages:</span>{" "}
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div className="md:absolute top-[340px] left-[480px]">
          {/* Map out if theres a borders array, else returns null */}
          {borderCountries.length > 0 ? (
            <div className="inline w-full md:flex">
              <div className="font-medium mt-10 md:mt-4 ml-10 md:ml-0">
                Border Countries:
              </div>
              {borderCountries.map((borderCountry, index) => {
                const borderCountryCode =
                  country.borders && Array.isArray(country.borders)
                    ? country.borders[index]
                    : null;
                const borderCountryURL = `https://restcountries.com/v3.1/alpha/${borderCountryCode}`;
                return (
                  <button
                    key={index}
                    href={borderCountryURL}
                    className="bg-[#2b3945] rounded mt-4 w-32 ml-8 mb-20"
                    onClick={() => handleBorderCountryClick(borderCountryCode)}
                  >
                    {borderCountry}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
