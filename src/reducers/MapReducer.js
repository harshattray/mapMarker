/**
 * @Author: harsha
 * @Date:   2019-04-16T01:41:56+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-16T02:07:01+05:30
 */

import { SET_MAP_OBJECT } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SET_MAP_OBJECT:
      return {
        ...state,
        initialMapData: action.payload
      };
    default:
      return state;
  }
};
