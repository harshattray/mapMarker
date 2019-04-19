/**
 * @Author: harsha
 * @Date:   2019-04-18T00:54:07+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-18T02:41:45+05:30
 */
import React from "react";

export const renderInputFields = ({
  label,
  type,
  placeholder,
  name,
  input,
  pattern,
  meta: { touched, error, warning }
}) => {
  return (
    <div>
      <input type={type} label={label} placeholder={placeholder} {...input} />
      {touched && error && <i>{error}</i>}
    </div>
  );
};
