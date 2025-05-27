import React from 'react';

type HeaderProps = {
  currentTab: string;
  onTabChange: (tab: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({ currentTab, onTabChange, isDarkMode, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">DApp Dashboard</h1>
      <div className="flex items-center gap-4">
        <button
          className={`px-3 py-2 rounded ${
            currentTab === 'home' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
          }`}
          onClick={() => onTabChange('home')}
        >
          Home
        </button>
        <button
          className={`px-3 py-2 rounded ${
            currentTab === 'wallet' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
          }`}
          onClick={() => onTabChange('wallet')}
        >
          Wallet
        </button>
        <button
          className="ml-4 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded"
          onClick={toggleTheme}
        >
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
};

export default Header;
