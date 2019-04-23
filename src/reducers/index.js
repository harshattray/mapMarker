/**
 * @Author: harsha
 * @Date:   2019-04-16T00:57:16+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-22T05:39:36+05:30
 */

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import SearchReducer from "./SearchReducer";

export default combineReducers({
  form: formReducer,
  searchData: SearchReducer
});
