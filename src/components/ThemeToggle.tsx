"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex gap-3"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun size={24} className=" opacity-100" />
      <Moon size={24} className=" opacity-100  " />
    </button>
  );
}
