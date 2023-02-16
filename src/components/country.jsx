function Country({ country, handleCountryClick }) {
  return (
    <>
      <div
        className="w-[300px] lg:w-72 justify-around mt-20 bg-[#2b3945] rounded-lg"
        onClick={() => handleCountryClick(country)}
      >
        <img src={country.flags.svg} className="w-80 rounded-lg" />
        <div className="mx-6 my-16">
          <h1 className="-translate-y-6 text-xl font-bold">
            {country.name.common}
          </h1>
          <p>
            <span className="font-medium">Population:</span>{" "}
            {country.population}
          </p>
          <p>
            <span className="font-medium">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-medium">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </>
  );
}

export default Country;
