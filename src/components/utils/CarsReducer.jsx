export const INITIAL_STATE = {
  make: null,
  model: null,
  year: null,
  price: null,
  mileage: null,
  fuel: null,
  transmission: null,
  drivetrain: null,
  filteredcars: [],
  active: 'view_1',
  carperpage: 12,
  slidervalues: [2900, 24990],
  offset: 1,
  page: 1,
  error: '',
};

export const carsReducer = (INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_MAKE':
      return {
        ...INITIAL_STATE,
        [action.select]: action.select.value,
      };
    case 'CHANGE_MODEL':
      return {
        ...INITIAL_STATE,
        [action.select]: action.select.value,
      };
    case 'CHANGE_YEAR':
      return {
        ...INITIAL_STATE,
        [action.select]: action.select.value,
      };
    case 'CHANGE_MILEAGE':
      return {
        ...INITIAL_STATE,
        [action.select]: action.select.value,
      };
    case 'CHANGE_FUEL':
      return {
        ...INITIAL_STATE,
        [action.select]: action.select.value,
      };
    case 'CHANGE_TRANSMISSION':
      return {
        ...INITIAL_STATE,
        [action.select]: action.select.value,
      };
    case 'CHANGE_DRIVETRAIN':
      return {
        ...INITIAL_STATE,
        [action.select]: action.select.value,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
  // switch (action.type) {
  //   case 'SET_CAR':
  //     return {
  //       ...state,
  //       make: action.payload,
  //       model: action.payload.model,
  //       year: action.payload.year,
  //       price: action.payload.price,
  //       mileage: action.payload.mileage,
  //       fuel: action.payload.fuel,
  //       transmission: action.payload.transmission,
  //       drivetrain: action.payload.drivetrain,
  //     };
  //   case 'SET_FILTERED_CARS':
  //     return {
  //       ...state,
  //       filteredcars: action.payload,
  //     };
  //   case 'SET_ACTIVE':
  //     return {
  //       ...state,
  //       active: action.payload,
  //     };
  //   case 'SET_CAR_PER_PAGE':
  //     return {
  //       ...state,
  //       carperpage: action.payload,
  //     };
  //   case 'SET_SLIDER_VALUES':
  //     return {
  //       ...state,
  //       slidervalues: action.payload,
  //     };
  //   case 'SET_OFFSET':
  //     return {
  //       ...state,
  //       offset: action.payload,
  //     };
  //   case 'SET_PAGE':
  //     return {
  //       ...state,
  //       page: action.payload,
  //     };
  //   default:
  //     throw new Error(`Unknown action type: ${action.type}`);
  // }
};
