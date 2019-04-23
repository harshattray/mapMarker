/**
 * @Author: harsha
 * @Date:   2019-04-18T00:49:26+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-24T02:24:37+05:30
 */

import {
  SHOW_MORE_FIELDS,
  SUBMIT_FORM_DATA,
  FORM_SUBMISSION_ERROR,
  INIT_FORM_SUBMISSION,
  FORM_SUBMISSION_SUCCESS,
  GET_RESULTS_STACK,
  EDIT_RESULTS_STACK,
  DELETE_MARKER
} from "./types";

/**
 * [submitFormData Contains form data for initial Input form and point,index values along with form data for Edit Input forn]
 * @param  {[type]} formData [FormData object]
 * @param  {[type]} point    [description]
 * @param  {[type]} index    [description]
 * @return {[type]}          [description]
 */

export const submitFormData = (formData, point, index) => async (
  dispatch,
  getState
) => {
  const { location } = formData;
  const callback = function(results) {
    const marker = new window.google.maps.Marker({
      map: getState().searchData.initialMapData,
      position: results[0].geometry.location
    });
    if (point) {
      dispatch({
        type: EDIT_RESULTS_STACK,
        payload: results[0],
        editingIndex: index,
        marker: marker
      });
    } else {
      dispatch({
        type: GET_RESULTS_STACK,
        payload: results[0],
        mapObject: getState().searchData.initialMapData,
        marker: marker
      });
    }
  };

  /**
   * [getGeoCode generates Object based on location values]
   * @param  {[type]}   location [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */

  const getGeoCode = (location, callback) => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode(location, function(results, status) {
      if (status === "OK") {
        callback(results);
      } else {
      }
    });
  };
  getGeoCode({ address: location }, callback);
};

/**
 * [deleteMarker triggers DeleteMarker based on index values and passes updates mapObject]
 * @param  {[type]} index [index value for corresponding markList results]
 * @return {[type]}       [description]
 */

export const deleteMarker = index => (dispatch, getState) => {
  dispatch({
    type: DELETE_MARKER,
    deletingIndex: index,
    mapObject: getState().searchData.initialMapData
  });
};
