import { createContext, useContext, useState } from 'react';

const RestaurantContext = createContext();

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) throw new Error('useRestaurant must be used within RestaurantProvider');
  return context;
};

export const RestaurantProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <RestaurantContext.Provider value={{ orders, setOrders, menu, setMenu, loading, setLoading }}>
      {children}
    </RestaurantContext.Provider>
  );
};