/**
 * @Author: harsha
 * @Date:   2019-04-18T00:54:07+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-25T03:39:27+05:30
 */
import React, { Fragment } from "react";
import { Input } from "semantic-ui-react";

/**
 * [RenderInputFields description]
 * @param  {[type]} label       [Conditionally renders label based on props]
 * @param  {[type]} type        [Type of form to be rendered]
 * @param  {[type]} placeholder [Conditionally rendered placeholder based on props]
 * @param  {[type]} name        [description]
 * @param  {[type]} pattern     [description]
 * @param  {[type]} meta        [description]
 * @param  {[type]} error       [description]
 * @param  {[type]} warning     [description]
 * @param  {[type]} input       [Input object]
 * @return {[type]}             [description]
 */

export const RenderInputFields = ({
  label,
  type,
  placeholder,
  name,
  pattern,
  mapError,
  meta: { touched, error, warning },
  input
}) => {
  return (
    <Fragment>
      <Input type={type} label={label} placeholder={placeholder} {...input} />
      <div>{touched && error && <i>{error}</i>}</div>
      <div>{mapError && <i>{mapError}</i>}</div>
    </Fragment>
  );
};
