import { useTheme } from "./themeContext";

function Country({ country, handleCountryClick }) {
  const colorTheme = useTheme();

  return (
    <>
      <div
        className="w-[300px] lg:w-72 justify-around mt-16 rounded-lg border-2 border-slate-600"
        onClick={() => handleCountryClick(country)}
        style={{
          color: colorTheme ? "#2b3945" : "white",
          background: colorTheme ? "white" : "#2b3945",
        }}
      >
        <img src={country.flags.svg} className="w-80 rounded-lg" />
        <div className="mx-6 my-16">
          <h1 className="-translate-y-6 text-xl font-bold">
            {country.name.common}
          </h1>
          <p>
            <span className="font-medium">Population:</span>{" "}
            {country.population.toLocaleString()}
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
