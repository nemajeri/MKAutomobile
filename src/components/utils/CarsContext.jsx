import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCarsList, setFilteredCarsList] = useState([]);
  const [sliderValues, setSliderValues] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    axios
      .get(process.env.REACT_APP_MY_API_KEY)
      .then(res => {
        const data = res.data;
        setAllCars(data);
        setFilteredCarsList(data);
        // Ovdje odrediti pocetne vrijednosti rc slidera
        // const firstSliderValue = Math.max(...[] ]);
        // const secondSliderValue = Math.min.apply(...[data]);
        // console.log(firstSliderValue, secondSliderValue);
        // setSliderValues([firstSliderValue, secondSliderValue])
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  return (
    <CarsContext.Provider
      value={{
        array: allCars,
        loader: [isLoading, setIsLoading],
        filteredArray: [filteredCarsList, setFilteredCarsList],
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export const useAPI = () => {
  const context = useContext(CarsContext);
  if (context === undefined) {
    throw new Error('Context muss mit dem Provider genutzt werden');
  }
  return context;
};
