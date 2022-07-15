const INITIAL_STATE = {
  cart: 23,
};

function addCartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADDCART': {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default: {
    }
  }
  return state;
}

export default addCartReducer;
