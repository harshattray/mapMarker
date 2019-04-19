/**
 * @Author: harsha
 * @Date:   2019-04-16T01:45:34+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-16T01:49:12+05:30
 */
import { SET_MAP_OBJECT } from "./types";

export const setMapObject = map => dispatch => {
  dispatch({
    type: SET_MAP_OBJECT,
    payload: map
  });
};
