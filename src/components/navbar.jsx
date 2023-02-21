import whiteMoon from "../icons/moon.png";
import darkMoon from "../icons/moondark.png";
import { useTheme, useThemeUpdate } from "./themeContext";

export function Navbar() {
  const colorTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  //   const colors = {
  //     color: "white",
  //     background: "black",
  //   };
  return (
    <>
      <div>
        <div className="w-full border-b-2">
          <div
            className="flex w-full justify-between "
            style={{
              color: colorTheme ? "#2b3945" : "white",
              background: colorTheme ? "white" : "#2b3945",
            }}
          >
            <h1 className="ml-6 lg:ml-12 my-6 ">Where in the world?</h1>
            <div className="flex mx-6 lg:mx-12 my-6 gap-4">
              <img src={colorTheme ? darkMoon : whiteMoon} className="h-6" />
              <button onClick={toggleTheme}>Dark Mode</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
