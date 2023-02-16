import whiteMoon from "../icons/moon.png";
import darkMoon from "../icons/moondark.png";

export function Navbar() {
  return (
    <>
      <div className="w-full flex">
        <div className="flex bg-[#2b3945] w-full justify-between">
          <h1 className="ml-6 lg:ml-12 my-6 text-white">Where in the world?</h1>
          <div className="flex mx-6 lg:mx-12 my-6 gap-4">
            {/* <img src={whiteMoon} className="w-8" /> */}
            {/* <img src={darkMoon} className="h-6" />
            <button>Dark Mode</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
