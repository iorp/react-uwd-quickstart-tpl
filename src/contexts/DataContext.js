import React, { createContext, useState } from 'react';

// Create a new context
const DataContext = createContext();

// Create a context provider component
const DataContextProvider = ({ children }) => {
  const [contextData, setContextData] = useState(null);

  return (
    <DataContext.Provider value={{ contextData, setContextData }}>
      {children}
    </DataContext.Provider>
  );
};

export {   DataContext,   DataContextProvider };
