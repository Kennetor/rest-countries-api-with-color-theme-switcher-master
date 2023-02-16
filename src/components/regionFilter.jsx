function FilterRegion({ onRegionChange }) {
  function handleRegionClick(region) {
    onRegionChange(region);
  }
  return (
    <div className="dropdown flex justify-center md:justify-end ">
      <label
        tabIndex={0}
        className="btn bg-[#2b3945] md:relative bottom-20 md:mr-20 w-52"
      >
        Filter by Region
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-[#2b3945] rounded-box w-52 translate-y-16 md:-translate-y-6  md:-translate-x-20"
      >
        <li>
          <a onClick={() => handleRegionClick("Africa")}>Africa</a>
        </li>
        <li>
          <a onClick={() => handleRegionClick("Americas")}>America</a>
        </li>
        <li>
          <a onClick={() => handleRegionClick("Asia")}>Asia</a>
        </li>
        <li>
          <a onClick={() => handleRegionClick("Europe")}>Europe</a>
        </li>
        <li>
          <a onClick={() => handleRegionClick("Oceania")}>Oceania</a>
        </li>
      </ul>
    </div>
  );
}
export default FilterRegion;
