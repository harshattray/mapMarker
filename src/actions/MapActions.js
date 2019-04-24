/**
 * @Author: harsha
 * @Date:   2019-04-16T01:45:34+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-25T03:32:03+05:30
 */
import {
  SET_MAP_OBJECT,
  EDIT_RESULTS_STACK,
  CANCEL_EDITING,
  IS_EDITING
} from "./types";

/**
 * [setMapObject Action dispatches the initially fetched map object]
 * @param {[Object]} map [Map object fetched from GoogleMaps API]
 */
export const setMapObject = map => dispatch => {
  dispatch({
    type: SET_MAP_OBJECT,
    payload: map
  });
};

/**
 * [triggerEditInput Triggers edit form ]
 * @param  {[type]} point [lat long values]
 * @param  {[type]} index [index value for maplist values]
 * @return {[type]}       [description]
 */

export const triggerEditInput = (point, index) => dispatch => {
  dispatch({
    type: IS_EDITING,
    isEditing: true,
    pointValues: point,
    indexValues: index
  });
};

/**
 * [cancelEditInput Triggers cancel form action]
 * @return {[type]} [description]
 */
export const cancelEditInput = () => dispatch => {
  dispatch({
    type: CANCEL_EDITING,
    isEditing: false
  });
};
