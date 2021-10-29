const initialState = {
    extractionRate: 0.00, 
    oilType: "", 
    amount: 0.00, 
    servings: 0.00, 
    percentage: 0.00,
    servingTHC: 0.00,
    totalTHC: 0.00,
  };
  
  const GET_INPUT = "GET_INPUT",
    CLEAR_INPUT = "CLEAR_INPUT";
  
  const getInput = (userObj) => {
    return {
      type: GET_INPUT,
      payload: userObj,
    };
  };
  
  export default function reducer(state = initialState, action) {
    const {
      type,
      payload
    } = action;
  
    switch (type) {
      case GET_INPUT:
        return {
          ...state,
          user: payload,
            loggedIn: true,
        };
      case CLEAR_INPUT:
        return {
          ...state,
          user: payload,
            loggedIn: false,
        };
        default:
          return state;
    }
  }