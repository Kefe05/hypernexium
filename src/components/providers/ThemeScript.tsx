export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        const storageKey = 'hyper-nexium-theme';
        const theme = localStorage.getItem(storageKey);
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const effectiveTheme = theme === 'system' || !theme ? systemTheme : theme;
        
        document.documentElement.classList.add(effectiveTheme);
        
        // Set CSS variables immediately
        if (effectiveTheme === 'dark') {
          document.documentElement.style.setProperty('--color-bg-base', '#0F172A');
          document.documentElement.style.setProperty('--color-bg-surface', '#1E293B');
          document.documentElement.style.setProperty('--color-text-primary', '#F8FAFC');
          document.documentElement.style.setProperty('--color-text-secondary', '#CBD5E1');
          document.documentElement.style.setProperty('--color-border-base', '#334155');
        } else {
          document.documentElement.style.setProperty('--color-bg-base', '#FFFFFF');
          document.documentElement.style.setProperty('--color-bg-surface', '#F8FAFC');
          document.documentElement.style.setProperty('--color-text-primary', '#0F172A');
          document.documentElement.style.setProperty('--color-text-secondary', '#475569');
          document.documentElement.style.setProperty('--color-border-base', '#E2E8F0');
        }
      } catch (e) {}
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
}
