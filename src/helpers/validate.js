/**
 * @Author: harsha
 * @Date:   2019-04-24T01:25:11+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-24T01:26:12+05:30
 */
export const validate = values => {
  const errors = {};
  if (!values.location) {
    errors.location = "Location is required";
  }
  return errors;
};
