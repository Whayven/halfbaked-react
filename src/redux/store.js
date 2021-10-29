import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PotencyCalculatorReducer from "./reducers/PotencyCalculatorReducer"


const rootReducer = combineReducers({
  PotencyCalculatorReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));