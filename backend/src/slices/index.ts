import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";
import CalendarReducer from "./calendar/reducer";

// Authentication
import LoginReducer from "./auth/login/reducer";
import AccountReducer from "./auth/register/reducer";
import ForgetPasswordReducer from "./auth/forgetpwd/reducer";
import ProfileReducer from "./auth/profile/reducer";
import DashboardReducer from "./dashboard/reducer"


const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Calendar: CalendarReducer,
    Login: LoginReducer,
    Account: AccountReducer,
    ForgetPassword: ForgetPasswordReducer,
    Profile: ProfileReducer,
    Dashboard: DashboardReducer
});

export default rootReducer;