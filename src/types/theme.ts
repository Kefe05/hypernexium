export type Theme = "light" | "dark" | "system";

export interface ThemeContextType {
  theme: Theme;
  systemTheme: "light" | "dark";
  effectiveTheme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}
