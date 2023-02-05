import { cars } from '../utils/cars';
import { createStore } from 'redux';
import axios from 'axios';

let min = Math.min(...cars.map(car => car.price));
let max = Math.max(...cars.map(car => car.price));

const initialState = {
  allCars: cars,
  isLoading: true,
  filteredCarsList: [],
  sliderValues: [min, max],
  carsToCompare: new Set()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CARS':
      return {
        ...state,
        allCars: action.payload,
        filteredCarsList: action.payload,
        sliderValues: [
          action.payload[0].price,
          action.payload[action.payload.length - 1].price
        ],
        isLoading: false
      };
    case 'SET_CARS_TO_COMPARE':
      return { ...state, carsToCompare: action.payload };
    case 'SET_SLIDER_VALUES':
      return {...state, sliderValues: action.payload };
    case 'SET_FILTERED_CARS_LIST':
      return {...state, filteredCarsList: action.payload };
      case 'SET_IS_LOADING':
        return {...state, isLoading: action.payload };
    default: 
      return state;
  }
};

export const store = createStore(reducer);

export const fetchCars = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_MY_API_KEY)
      .then(res => {
        const data = res.data;
        const sortedCars = data.sort((a, b) => a.price - b.price);
        dispatch({
          type: 'FETCH_CARS',
          payload: sortedCars
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const setCarsToCompare = (cars) => {
  return {
    type: 'SET_CARS_TO_COMPARE',
    payload: cars
  };
};

export const setSliderValues = (sliderValues) => {
  return {
    type: 'SET_SLIDER_VALUES',
    payload: sliderValues
  };
};

export const setFilteredCarsList = (cars) => {
  return {
    type: 'SET_FILTERED_CARS_LIST',
    payload: cars
  };
};

export const setIsLoading = (value) => {
  return {
    type: 'SET_IS_LOADING',
    payload: value
  };
};
