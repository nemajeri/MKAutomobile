import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_MY_API_KEY);
      const data = res.data;
      setAllCars(data);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
  return (
    <CarsContext.Provider
      value={{ array: allCars, loader: [isLoading, setIsLoading] }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContext;
