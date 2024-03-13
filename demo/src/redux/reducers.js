
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true, error: null };

    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };

    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
