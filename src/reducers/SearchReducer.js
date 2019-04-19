/**
 * @Author: harsha
 * @Date:   2019-04-18T00:48:33+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-20T04:02:35+05:30
 */
import { GET_RESULTS_STACK } from "../actions/types";
import { mapObjectBuilder } from "../helpers/MapObjBuilder";

export default (state = [], action) => {
  switch (action.type) {
    case GET_RESULTS_STACK:
      return {
        ...state,
        getResultsStack: action.payload,
        markerObject: mapObjectBuilder(
          action.mapObject,
          action.payload.geometry
        )
      };
    default:
      return state;
  }
};
