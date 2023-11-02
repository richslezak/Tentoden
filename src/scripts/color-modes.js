(() => {
  'use strict';

  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme) => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  const showActiveTheme = (theme) => {
    const themeToggle = document.querySelector('#bd-theme-toggle');
    const themeToggleText = document.querySelector('#bd-theme-text');
    const activeThemeIcon = themeToggle.querySelector('.theme-icon-active use');

    if (theme === 'light') {
      activeThemeIcon.setAttribute('href', '#sun-fill');
    } else {
      activeThemeIcon.setAttribute('href', '#moon-stars-fill');
    }

    const themeToggleLabel = `${themeToggleText.textContent} (${theme})`;
    themeToggle.setAttribute('aria-label', themeToggleLabel);
  };

  setTheme(getPreferredTheme());
  showActiveTheme(getPreferredTheme());

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme());
      showActiveTheme(getPreferredTheme());
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#bd-theme-toggle');
    themeToggle.addEventListener('click', () => {
      const currentTheme = getStoredTheme() || 'auto';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setStoredTheme(newTheme);
      setTheme(newTheme);
      showActiveTheme(newTheme);
    });
  });
})();
