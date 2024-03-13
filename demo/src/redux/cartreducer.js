const initialState = {
    items: [],
    products: [

      { id: 1, name: "Product 1", price: 10.0 },
      { id: 2, name: "Product 2", price: 15.0 },
      { id: 3, name: "Product 3", price: 20.0 },
    ],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  