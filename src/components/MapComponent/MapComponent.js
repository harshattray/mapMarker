/**
 * @Author: harsha
 * @Date:   2019-04-15T16:08:10+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-24T00:11:47+05:30
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import InputComponent from "../InputComponent/InputComponent";
import MarkerListComponent from "../MarkerListComponent/MarkerListComponent";
import { cancelEditInput } from "../../actions/MapActions";

class MapComponent extends Component {
  render() {
    const { isEditing, cancelEditInput, point, index } = this.props;
    return (
      <Fragment>
        <div className="form-container col col-xs-12 col-sm-6">
          {isEditing ? (
            <div>
              <InputComponent point={point} index={index} />
              <Button basic color="blue" onClick={e => cancelEditInput()}>
                Cancel
              </Button>
            </div>
          ) : (
            <InputComponent />
          )}
          <MarkerListComponent />
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ searchData }) {
  return {
    isEditing: searchData.isEditing,
    point: searchData.pointValues,
    index: searchData.indexValues
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ cancelEditInput }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
