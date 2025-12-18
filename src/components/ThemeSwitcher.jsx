import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Theme Switcher Component
 * Provides UI for switching between available themes
 */
export default function ThemeSwitcher() {
  const { theme, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Theme metadata with icons and descriptions
  const themeInfo = {
    light: { icon: '🌞', label: 'Light', description: 'Clean & Minimal' },
    dark: { icon: '🌙', label: 'Dark', description: 'Modern & Sleek' },
    cyberpunk: { icon: '🌃', label: 'Cyberpunk', description: 'Bold & Futuristic' },
    pastel: { icon: '🌸', label: 'Pastel', description: 'Soft & Dreamy' }
  };

  const handleThemeSelect = (selectedTheme) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  const currentThemeInfo = themeInfo[theme] || themeInfo.dark;

  return (
    <div className="relative">
      {/* Theme Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)'
        }}
        aria-label="Switch theme"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-xl" role="img" aria-label={`${currentThemeInfo.label} theme`}>
          {currentThemeInfo.icon}
        </span>
        <span className="hidden sm:inline text-sm font-medium">
          {currentThemeInfo.label}
        </span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div 
            className="fixed inset-0 z-10 md:hidden" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown Content */}
          <div 
            className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg z-20 overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)'
            }}
            role="menu"
            aria-orientation="vertical"
          >
            <div className="py-1">
              {availableThemes.map((themeName) => {
                const info = themeInfo[themeName];
                const isActive = themeName === theme;
                
                return (
                  <button
                    key={themeName}
                    onClick={() => handleThemeSelect(themeName)}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-150"
                    style={{
                      backgroundColor: isActive ? 'var(--bg-tertiary)' : 'transparent',
                      color: 'var(--text-primary)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                    role="menuitem"
                    aria-current={isActive ? 'true' : 'false'}
                  >
                    <span className="text-2xl" role="img" aria-label={`${info.label} theme icon`}>
                      {info.icon}
                    </span>
                    <div className="flex-grow">
                      <div className="font-medium flex items-center gap-2">
                        {info.label}
                        {isActive && (
                          <svg 
                            className="w-4 h-4" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            style={{ color: 'var(--accent-primary)' }}
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                        )}
                      </div>
                      <div 
                        className="text-xs mt-0.5"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {info.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
