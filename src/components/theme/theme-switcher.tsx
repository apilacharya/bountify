"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { LucideMoon, LucideSun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <LucideSun className="h-4 w-4 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <LucideMoon className="h-4 w-4 rotate-90 scale-0 absolute transition-transform dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toogle theme</span>
    </Button>
  );
};
export { ThemeSwitcher };
