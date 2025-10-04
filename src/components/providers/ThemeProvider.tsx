"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import type { Theme, ThemeContextType } from "@/types/theme";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  enableSystem?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "hyper-nexium-theme",
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const effectiveTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (!enableSystem) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [enableSystem]);

  // Apply theme to document
  const applyTheme = useCallback((newTheme: "light" | "dark") => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);

    // Set CSS variables
    if (newTheme === "dark") {
      root.style.setProperty("--color-bg-base", "#0F172A");
      root.style.setProperty("--color-bg-surface", "#1E293B");
      root.style.setProperty("--color-text-primary", "#F8FAFC");
      root.style.setProperty("--color-text-secondary", "#CBD5E1");
      root.style.setProperty("--color-border-base", "#334155");
    } else {
      root.style.setProperty("--color-bg-base", "#FFFFFF");
      root.style.setProperty("--color-bg-surface", "#F8FAFC");
      root.style.setProperty("--color-text-primary", "#0F172A");
      root.style.setProperty("--color-text-secondary", "#475569");
      root.style.setProperty("--color-border-base", "#E2E8F0");
    }
  }, []);

  // Initialize theme
  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem(storageKey) as Theme | null;
    const initialTheme = savedTheme || defaultTheme;
    setThemeState(initialTheme);
  }, [storageKey, defaultTheme]);

  // Apply effective theme when it changes
  useEffect(() => {
    if (!mounted) return;
    applyTheme(effectiveTheme);
  }, [effectiveTheme, mounted, applyTheme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      localStorage.setItem(storageKey, newTheme);
    },
    [storageKey],
  );

  const toggleTheme = useCallback(() => {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "light" ? "dark" : "light");
    }
  }, [theme, systemTheme, setTheme]);

  // Prevent flash of unstyled content
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        systemTheme,
        effectiveTheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
