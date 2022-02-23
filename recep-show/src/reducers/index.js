import { combineReducers } from "redux"
import login from "./login.js";
import idInit  from "./idInit.js";
const rootReducer = combineReducers({
    login,
    idInit,
})
export default rootReducer;