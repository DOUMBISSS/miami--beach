import { combineReducers } from "redux";
import {categoryReducer} from "./categoryReducer";
import  {cartReducer}  from "./cartReducer";



export const rootReducer = combineReducers({
    categoryReducer : categoryReducer,
    cartReducer:cartReducer
})