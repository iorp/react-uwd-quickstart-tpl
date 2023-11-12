// Greeting.js

import React, { useContext } from 'react';
import {LanguageContext} from './../../../contexts/LanguageContext'

function Greeting() {
  const { selectedLanguage, translations, setSelectedLanguage } = useContext(LanguageContext);

  return (
    <div>
      <div>{translations[selectedLanguage].greeting}</div>
      <div>{translations[selectedLanguage].farewell}</div>
      <button onClick={() => setSelectedLanguage('en')}>English</button>
      <button onClick={() => setSelectedLanguage('fr')}>Français</button>
    </div>
  );
}

export default Greeting;
