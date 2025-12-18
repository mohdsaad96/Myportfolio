/**
 * Theme Manager Module
 * Manages theme state, persistence, and system preference detection
 * Using IIFE (Immediately Invoked Function Expression) pattern for encapsulation
 */

const ThemeManager = (() => {
  // ============================================
  // PRIVATE VARIABLES
  // ============================================
  const STORAGE_KEY = 'portfolio-theme';
  const themes = ['light', 'dark', 'cyberpunk', 'pastel'];
  let currentTheme = 'dark'; // default theme
  let listeners = [];

  // ============================================
  // PRIVATE METHODS
  // ============================================

  /**
   * Validates if a theme name is supported
   * @param {string} theme - Theme name to validate
   * @returns {boolean} True if theme is valid
   */
  const isValidTheme = (theme) => {
    return themes.includes(theme);
  };

  /**
   * Applies theme to the DOM
   * @param {string} theme - Theme name to apply
   */
  const applyTheme = (theme) => {
    if (!isValidTheme(theme)) {
      console.warn(`Invalid theme: ${theme}. Falling back to dark theme.`);
      theme = 'dark';
    }

    // Remove no-transition class after initial load
    const body = document.body;
    if (body.classList.contains('no-transition')) {
      // Allow one frame for initial render
      requestAnimationFrame(() => {
        body.classList.remove('no-transition');
      });
    }

    // Set theme attribute on root element
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;

    // Notify listeners
    notifyListeners(theme);
  };

  /**
   * Saves theme preference to localStorage
   * @param {string} theme - Theme name to save
   */
  const saveTheme = (theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      console.error('Failed to save theme to localStorage:', error);
    }
  };

  /**
   * Loads theme preference from localStorage
   * @returns {string|null} Saved theme or null if not found
   */
  const loadTheme = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to load theme from localStorage:', error);
      return null;
    }
  };

  /**
   * Detects system color scheme preference
   * @returns {string} 'dark' or 'light' based on system preference
   */
  const detectSystemPreference = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark'; // default
  };

  /**
   * Notifies all registered listeners of theme change
   * @param {string} theme - New theme name
   */
  const notifyListeners = (theme) => {
    listeners.forEach(listener => {
      try {
        listener(theme);
      } catch (error) {
        console.error('Error in theme change listener:', error);
      }
    });
  };

  /**
   * Sets up system preference change listener
   */
  const setupSystemPreferenceListener = () => {
    if (window.matchMedia) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)');

      const handleChange = () => {
        // Only update if user hasn't set a preference
        const savedTheme = loadTheme();
        if (!savedTheme) {
          const systemTheme = detectSystemPreference();
          applyTheme(systemTheme);
        }
      };

      // Use newer API if available, fallback to deprecated addListener
      if (darkModeQuery.addEventListener) {
        darkModeQuery.addEventListener('change', handleChange);
        lightModeQuery.addEventListener('change', handleChange);
      } else if (darkModeQuery.addListener) {
        darkModeQuery.addListener(handleChange);
        lightModeQuery.addListener(handleChange);
      }
    }
  };

  // ============================================
  // PUBLIC API
  // ============================================

  return {
    /**
     * Initializes the theme manager
     * Loads saved theme or detects system preference
     */
    init() {
      // Add no-transition class for initial load to prevent flashing
      document.body.classList.add('no-transition');

      // Determine initial theme
      const savedTheme = loadTheme();
      let initialTheme;

      if (savedTheme && isValidTheme(savedTheme)) {
        initialTheme = savedTheme;
      } else {
        initialTheme = detectSystemPreference();
      }

      // Apply initial theme
      applyTheme(initialTheme);

      // Set up system preference listener
      setupSystemPreferenceListener();

      console.log(`Theme Manager initialized with theme: ${initialTheme}`);
    },

    /**
     * Switches to a new theme
     * @param {string} theme - Theme name to switch to
     * @returns {boolean} True if theme was changed successfully
     */
    switchTheme(theme) {
      if (!isValidTheme(theme)) {
        console.error(`Invalid theme: ${theme}. Available themes:`, themes);
        return false;
      }

      applyTheme(theme);
      saveTheme(theme);

      // Dispatch custom event for React components
      const event = new CustomEvent('themeChange', { 
        detail: { theme } 
      });
      window.dispatchEvent(event);

      return true;
    },

    /**
     * Gets the current active theme
     * @returns {string} Current theme name
     */
    getCurrentTheme() {
      return currentTheme;
    },

    /**
     * Gets list of all available themes
     * @returns {Array<string>} Array of theme names
     */
    getAvailableThemes() {
      return [...themes];
    },

    /**
     * Registers a callback for theme changes
     * @param {Function} callback - Function to call when theme changes
     * @returns {Function} Unsubscribe function
     */
    subscribe(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function');
      }

      listeners.push(callback);

      // Return unsubscribe function
      return () => {
        listeners = listeners.filter(listener => listener !== callback);
      };
    },

    /**
     * Cycles to the next theme in the list
     */
    cycleTheme() {
      const currentIndex = themes.indexOf(currentTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      const nextTheme = themes[nextIndex];
      this.switchTheme(nextTheme);
    }
  };
})();

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
  });
} else {
  ThemeManager.init();
}

// Export for ES6 modules
export default ThemeManager;
