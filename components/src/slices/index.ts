import { combineReducers } from "redux";


// Front
import LayoutReducer from "./layouts/reducer";

const rootReducer = combineReducers({
    Layout: LayoutReducer,
});

export default rootReducer;