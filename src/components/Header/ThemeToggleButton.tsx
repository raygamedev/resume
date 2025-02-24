import React, { useState, useEffect } from "react";

export const ThemeToggleButton: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage or system preference on mount
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = (): void => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full border border-gray-300 dark:border-zinc-600 shadow transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-zinc-700 "
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        // When in dark mode, show the sun icon to indicate a switch to light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-t-light"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364-6.364l.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>
      ) : (
        // When in light mode, show a refined crescent moon icon to indicate a switch to dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
};
