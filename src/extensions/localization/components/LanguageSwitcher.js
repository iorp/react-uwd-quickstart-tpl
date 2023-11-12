// LanguageSwitcher.js

import React, { useContext } from 'react';
import {LanguageContext} from './../../../contexts/LanguageContext'

function LanguageSwitcher() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
  };

  return (
    <div className="language-switcher">
      <label htmlFor="language-select">Select Language:</label>
      <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
}

export default LanguageSwitcher;
