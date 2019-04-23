/**
 * @Author: harsha
 * @Date:   2019-04-24T01:25:11+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-24T02:58:47+05:30
 */

/**
 * [validate Validate function]
 * @param  {[type]} values [description]
 * @return {[type]}        [description]
 */

export const validate = values => {
  const errors = {};
  if (!values.location) {
    errors.location = "Location is required";
  }
  return errors;
};
