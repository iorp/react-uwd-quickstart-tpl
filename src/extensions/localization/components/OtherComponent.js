// MyComponent.js

import React, { useContext } from 'react';
import {LanguageContext} from './../../../contexts/LanguageContext'

function OtherComponent() {
  const { selectedLanguage, translations, updateTranslations } = useContext(LanguageContext);

  const changeGreetingTranslation = () => {
    // Update the greeting translation for the selected language
    updateTranslations({
        en: {
            greeting: 'hi there',
        },
        fr: {
            greeting: 'sacre bleu',
        },
      });
  };

  return (
    <div>
      <div>Selected Language: {selectedLanguage}</div>
      <div>{translations[selectedLanguage].greeting}</div>
      <button onClick={changeGreetingTranslation}>Change Greeting</button>
    </div>
  );
}

export default OtherComponent;
