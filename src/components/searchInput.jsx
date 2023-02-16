import searchglass from "../icons/searchwhite.png";

export function SearchInput({ onChange }) {
  return (
    <>
      <img
        src={searchglass}
        className="w-6 absolute top-[52px] z-50 left-16 md:left-20"
      />
      <div className="mx-10 mt-20">
        <input
          type="text"
          className="file-input file-input-bordered w-full md:w-96 max-w-sm text-center -translate-y-10 md:ml-4"
          placeholder="Search for a country..."
          onChange={onChange}
        />
      </div>
    </>
  );
}
