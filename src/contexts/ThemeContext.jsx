import { createContext, useContext, useState, useEffect } from 'react';
import ThemeManager from '../utils/themeManager';

// Create Theme Context
const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
  availableThemes: ['light', 'dark', 'cyberpunk', 'pastel']
});

/**
 * Theme Provider Component
 * Wraps the app and provides theme state to all components
 */
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(ThemeManager.getCurrentTheme());

  useEffect(() => {
    // Subscribe to theme changes from ThemeManager
    const unsubscribe = ThemeManager.subscribe((newTheme) => {
      setThemeState(newTheme);
    });

    // Listen for custom theme change events
    const handleThemeChange = (event) => {
      setThemeState(event.detail.theme);
    };
    window.addEventListener('themeChange', handleThemeChange);

    // Cleanup
    return () => {
      unsubscribe();
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  const setTheme = (newTheme) => {
    ThemeManager.switchTheme(newTheme);
  };

  const value = {
    theme,
    setTheme,
    availableThemes: ThemeManager.getAvailableThemes(),
    cycleTheme: () => ThemeManager.cycleTheme()
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to use theme context
 * @returns {Object} Theme context value with current theme and setter
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}

export default ThemeContext;
