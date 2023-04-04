import { combineReducers } from "redux";
import user from './user'
import auth from './auth'
import stocks from './stocks'
export default combineReducers({
    user,auth,stocks
});