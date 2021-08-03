import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import icecreamreducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamreducer
})

export default rootReducer