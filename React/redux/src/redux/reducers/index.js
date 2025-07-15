const initialState = {
  count: 0,
  favoritos: [],
  cart: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": 
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      console.log(action.saludo)
      return {
        ...state,
        count: state.count - 1
      };
    default: 
      return state;
  }
}