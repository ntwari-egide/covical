const initialData = {
    allcountriesdata: [],
    countrydata: [],
    error: null,
  };

export const dataReducer = (state, action) => {
    if (action.type === 'SET_ALL_COUNTRIES') {
      return { ...state, allcountriesdata: [], error: true };
    }
   
    if (action.type === 'SET_COUNTRY_DATA') {
      return { ...state, countrydata: action.countrydata, error: null };
    }
   
    throw new Error();
};