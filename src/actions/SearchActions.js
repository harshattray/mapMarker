/**
 * @Author: harsha
 * @Date:   2019-04-18T00:49:26+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-18T22:15:29+05:30
 */

import {
  SHOW_MORE_FIELDS,
  SUBMIT_FORM_DATA,
  FORM_SUBMISSION_ERROR,
  INIT_FORM_SUBMISSION,
  FORM_SUBMISSION_SUCCESS
} from "./types";

export const submitFormData = formData => async (dispatch, getState) => {
  const { location } = formData;
  const callback = function(results) {
    // setPositionObj(results[0]);
    console.log(results, "fetch results");
  };

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
