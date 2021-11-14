import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PotencyCalculatorReducer from "./reducers/PotencyCalculatorReducer";
import UserReducer from "./reducers/UserReducer";


const rootReducer = combineReducers({
  potency: PotencyCalculatorReducer,
  user: UserReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));