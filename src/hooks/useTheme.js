import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(function () {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(function (prev) {
      return prev === "light" ? "dark" : "light";
    });
  }

  return { theme, toggleTheme };
}