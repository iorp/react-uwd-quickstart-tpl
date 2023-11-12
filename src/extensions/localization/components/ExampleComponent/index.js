// MyComponent.js

import React, { useContext ,useEffect} from 'react';
import {LanguageContext} from './../../../../contexts/LanguageContext'

function ExampleComponent() {
  const { selectedLanguage, translations, updateTranslations ,str} = useContext(LanguageContext);

 useEffect(() => { 
    // update translations in code
    updateTranslations({
        en: {
          addedInCode: 'addedInCode en',
        },
        fr: {
          addedInCode: 'addedInCode fr',
        },
      }); 
      // update translations from multilanguage file
      updateTranslations(require('./strings/multi.json'))
       // update translations from separate monolanguage files
      updateTranslations({en:require('./strings/en.json')})
      updateTranslations({fr:require('./strings/fr.json')})
    }, []);

  return (
    <div style={{border:'1px solid black'}}>
      <div>Selected Language: {selectedLanguage}</div>
      <div>{str.greeting}</div>
      <div>{str.addedInCode}</div>
      <div>{str.addedInMulti}</div>
      <div>{str.addedInSingle}</div>
     </div>
  );
}

export default ExampleComponent;
