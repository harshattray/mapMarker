/**
 * @Author: harsha
 * @Date:   2019-04-15T16:08:10+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-18T00:00:46+05:30
 */

import React, { Fragment, Component } from "react";
import InputComponent from "../InputComponent/InputComponent";

export default class MapComponent extends Component {
  render() {
    console.log(this.props, "props-data");
    return (
      <Fragment>
        <div>Map renders here</div>
        <InputComponent />
      </Fragment>
    );
  }
}
