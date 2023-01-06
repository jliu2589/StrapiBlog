import { createContext, useState } from "react";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState({
    id: 1,
    Name: "Rovi",
    address: "9 Compton Crescent",
    rating: 5,
    description: "blah",
  });
  return (
    <RestaurantContext.Provider value={{ restaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};
