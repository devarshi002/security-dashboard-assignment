import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Header() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className="flex justify-end mb-6">
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 bg-primary text-black rounded-lg font-semibold"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}