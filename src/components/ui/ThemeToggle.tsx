"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useState, useRef, useEffect } from "react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

function ThemeToggleInner({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Always call hooks at the top level
  const { theme, setTheme } = useTheme();

  // All useEffect calls must be at the top level
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`relative ${className}`}>
        <button
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
          disabled
        >
          <Sun className="w-5 h-5" />
        </button>
      </div>
    );
  }

  const themes = [
    { value: "light" as const, label: "Light", icon: Sun },
    { value: "dark" as const, label: "Dark", icon: Moon },
    { value: "system" as const, label: "System", icon: Monitor },
  ];

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-surface hover:bg-light-border dark:hover:bg-slate-700 transition-colors"
        aria-label="Toggle theme"
        type="button"
      >
        <CurrentIcon className="w-5 h-5" />
        {showLabel && <span className="ml-2">{currentTheme.label}</span>}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-dark-surface border border-base shadow-lg z-50">
          <div className="p-2">
            {themes.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.value}
                  onClick={() => {
                    setTheme(t.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${theme === t.value
                    ? "bg-brand-accent/10 text-brand-primary dark:text-brand-accent"
                    : "hover:bg-light-surface dark:hover:bg-slate-700"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{t.label}</span>
                  {theme === t.value && (
                    <span className="ml-auto text-brand-primary dark:text-brand-accent">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`relative ${className}`}>
        <button
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
          disabled
        >
          <Sun className="w-5 h-5" />
        </button>
      </div>
    );
  }

  try {
    return <ThemeToggleInner className={className} showLabel={showLabel} />;
  } catch (error) {
    // Fallback if ThemeProvider is not available
    return (
      <div className={`relative ${className}`}>
        <button
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
          disabled
        >
          <Sun className="w-5 h-5" />
        </button>
      </div>
    );
  }
}

// Simple toggle version (no dropdown)
function ThemeToggleSimpleInner({ className = "" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { toggleTheme, effectiveTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors ${className}`}
        disabled
      >
        <Sun className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
    relative flex items-center w-14 h-8 
    rounded-full 
    bg-brand-accent/20 dark:bg-slate-800 
    border border-brand-accent/40
    transition-colors duration-500 ease-in-out
    ${className}
  `}
      aria-label={`Switch to ${effectiveTheme === "dark" ? "light" : "dark"} mode`}
      type="button"
    >
      <span
        className={`
      absolute top-1 left-1 
      w-6 h-6 flex items-center justify-center 
      rounded-full 
      bg-white dark:bg-slate-900 
      shadow-md
      transform transition-all duration-500 ease-in-out
      ${effectiveTheme === "dark" ? "translate-x-6" : ""}
    `}
      >
        {effectiveTheme === "dark" ? (
          <Moon className="w-4 h-4 text-brand-accent" />
        ) : (
          <Sun className="w-4 h-4 text-brand-accent" />
        )}
      </span>
    </button>
  );
}

export function ThemeToggleSimple({ className = "" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors ${className}`}
        disabled
      >
        <Sun className="w-5 h-5" />
      </button>
    );
  }

  try {
    return <ThemeToggleSimpleInner className={className} />;
  } catch (error) {
    // Fallback if ThemeProvider is not available
    return (
      <button
        className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors ${className}`}
        disabled
      >
        <Sun className="w-5 h-5" />
      </button>
    );
  }
}
