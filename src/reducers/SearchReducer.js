/**
 * @Author: harsha
 * @Date:   2019-04-18T00:48:33+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-25T02:50:40+05:30
 */
import {
  GET_RESULTS_STACK,
  EDIT_RESULTS_STACK,
  CANCEL_EDITING,
  SET_MAP_OBJECT,
  IS_EDITING,
  DELETE_MARKER
} from "../actions/types";
import {
  mapCoOrdsStack,
  editMarkersArray,
  editPositionCoords,
  deleteMarkersArray,
  markerArrayBuilder,
  deleteCoords
} from "../helpers/MapObjBuilder";

/**
 * [initial_state State object with initial values]
 * @type {Object}
 */

export const initial_state = {
  markersArray: [],
  coOrdsArray: [],
  isEditing: false
};

/**
 * [Search reducer]
 * @param  {Object} [state=initial_state] [initial state object]
 * @param  {Object} action                [action object with types and payload]
 * @return {Object}                       [description]
 */

export default (state = initial_state, action) => {
  switch (action.type) {
    case SET_MAP_OBJECT:
      return {
        ...state,
        initialMapData: action.payload
      };
    case GET_RESULTS_STACK:
      return {
        ...state,
        getResultsStack: action.payload,
        markersArray: state.markersArray.concat(action.marker),
        coOrdsArray: [...state.coOrdsArray, action.payload]
      };
    case EDIT_RESULTS_STACK:
      return {
        ...state,
        getResultsStack: action.payload,
        editIndexValue: action.editingIndex,
        markersArray: editMarkersArray(
          action.editingIndex,
          action.payload.geometry,
          state.markersArray,
          action.payload,
          action.marker
        ),
        coOrdsArray: editPositionCoords(
          state.coOrdsArray,
          action.editingIndex,
          action.payload
        )
      };
    case IS_EDITING:
      return {
        ...state,
        isEditing: action.isEditing,
        pointValues: action.pointValues,
        indexValues: action.indexValues
      };
    case CANCEL_EDITING:
      return {
        ...state,
        isEditing: action.isEditing
      };
    case DELETE_MARKER:
      return {
        ...state,
        deleteIndexValue: action.deletingIndex,
        markersArray: deleteMarkersArray(
          action.deletingIndex,
          state.markersArray
        ),
        coOrdsArray: deleteCoords(action.deletingIndex, state.coOrdsArray)
      };

    default:
      return state;
  }
};
