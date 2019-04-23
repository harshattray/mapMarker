/**
 * @Author: harsha
 * @Date:   2019-04-18T00:54:07+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-23T23:41:32+05:30
 */
import React, { Fragment } from "react";
import { Input } from "semantic-ui-react";

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
    <Fragment>
      <Input type={type} label={label} placeholder={placeholder} {...input} />
      {touched && error && <i>{error}</i>}
    </Fragment>
  );
};
