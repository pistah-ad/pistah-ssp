import React, { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme from localStorage on initial render
  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      root.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // Toggle the theme and save it to localStorage
  const toggleDarkMode = () => {
    const root = document.documentElement;
    const newTheme = !isDarkMode ? "dark" : "light";
    root.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
