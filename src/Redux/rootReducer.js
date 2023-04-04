import { combineReducers } from "redux";
import {categoryReducer} from "./categoryReducer";
import { homeReducer } from "./homeReducer";



export const rootReducer = combineReducers({
    categoryReducer : categoryReducer,
    homeReducer : homeReducer
})