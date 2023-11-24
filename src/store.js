import {combineReducers,configureStore} from "@reduxjs/toolKit";
import modalReducer from "./reducers/modal/modalSlice";
import todoReducer from "./reducers/todo/todoSlice";

const reducer = combineReducers({
    modal : modalReducer,
    todo : todoReducer
}) 
export const store = configureStore({
    reducer : reducer
})