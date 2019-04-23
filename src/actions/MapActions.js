/**
 * @Author: harsha
 * @Date:   2019-04-16T01:45:34+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-24T00:19:09+05:30
 */
import {
  SET_MAP_OBJECT,
  EDIT_RESULTS_STACK,
  CANCEL_EDITING,
  IS_EDITING
} from "./types";

export const setMapObject = map => dispatch => {
  dispatch({
    type: SET_MAP_OBJECT,
    payload: map
  });
};

export const triggerEditInput = (point, index) => dispatch => {
  dispatch({
    type: IS_EDITING,
    isEditing: true,
    pointValues: point,
    indexValues: index
  });
};
export const cancelEditInput = () => dispatch => {
  dispatch({
    type: CANCEL_EDITING,
    isEditing: false
  });
};
