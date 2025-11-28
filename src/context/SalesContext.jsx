import { createContext, useContext, useState } from 'react';

const SalesContext = createContext();

export const useSales = () => {
  const context = useContext(SalesContext);
  if (!context) throw new Error('useSales must be used within SalesProvider');
  return context;
};

export const SalesProvider = ({ children }) => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <SalesContext.Provider value={{ salesData, setSalesData, loading, setLoading }}>
      {children}
    </SalesContext.Provider>
  );
};