import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    axios
      .get(process.env.REACT_APP_MY_API_KEY)
      .then(res => {
        const data = res.data;
        setAllCars(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  return (
    <CarsContext.Provider
      value={{ array: allCars, loader: [isLoading, setIsLoading] }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export const useAPI = () => {
  const context = useContext(CarsContext);
  if (context === undefined) {
    throw new Error('Context muss mit dem Provider gentzt werden');
  }
  return context;
};
