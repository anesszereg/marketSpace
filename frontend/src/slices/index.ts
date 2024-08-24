import { combineReducers } from "@reduxjs/toolkit";

//front
import LayoutReducer from "./layouts/reducer";

const rootreducer = combineReducers({
    Layout: LayoutReducer
})

export default rootreducer;