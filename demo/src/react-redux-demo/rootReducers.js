import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import userReducer from './user/userReducer'

const rootReducers =combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer,
    users:userReducer
})
export default rootReducers;