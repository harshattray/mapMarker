/**
 * @Author: harsha
 * @Date:   2019-04-18T00:54:07+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-20T02:28:27+05:30
 */
import React from "react";

export const renderInputFields = ({
  label,
  type,
  placeholder,
  name,
  pattern,
  meta: { touched, error, warning },
  input
}) => {
  return (
    <div>
      <input type={type} label={label} placeholder={placeholder} {...input} />
      {touched && error && <i>{error}</i>}
    </div>
  );
};
