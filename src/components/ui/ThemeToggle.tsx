'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { useState, useRef, useEffect } from 'react'

interface ThemeToggleProps {
    className?: string
    showLabel?: boolean
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
    const { theme, setTheme, effectiveTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const themes = [
        { value: 'light' as const, label: 'Light', icon: Sun },
        { value: 'dark' as const, label: 'Dark', icon: Moon },
        { value: 'system' as const, label: 'System', icon: Monitor },
    ]

    const currentTheme = themes.find(t => t.value === theme) || themes[0]
    const CurrentIcon = currentTheme.icon

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
                            const Icon = t.icon
                            return (
                                <button
                                    key={t.value}
                                    onClick={() => {
                                        setTheme(t.value)
                                        setIsOpen(false)
                                    }}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${theme === t.value
                                            ? 'bg-brand-accent/10 text-brand-primary dark:text-brand-accent'
                                            : 'hover:bg-light-surface dark:hover:bg-slate-700'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{t.label}</span>
                                    {theme === t.value && (
                                        <span className="ml-auto text-brand-primary dark:text-brand-accent">✓</span>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

// Simple toggle version (no dropdown)
export function ThemeToggleSimple({ className = '' }: ThemeToggleProps) {
    const { toggleTheme, effectiveTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg bg-surface hover:bg-light-border dark:hover:bg-slate-700 transition-colors ${className}`}
            aria-label={`Switch to ${effectiveTheme === 'dark' ? 'light' : 'dark'} mode`}
            type="button"
        >
            {effectiveTheme === 'dark' ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    )
}