/**
 * @Author: harsha
 * @Date:   2019-04-16T00:57:16+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-18T02:12:53+05:30
 */

import { combineReducers } from "redux";
import MapRenderReducer from "./MapReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  mapData: MapRenderReducer
});
