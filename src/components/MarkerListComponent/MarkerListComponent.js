/**
 * @Author: harsha
 * @Date:   2019-04-21T18:16:31+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-24T02:29:33+05:30
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Card, Button } from "semantic-ui-react";
import { cancelEditInput, triggerEditInput } from "../../actions/MapActions";
import { deleteMarker } from "../../actions/SearchActions";
import InputComponent from "../InputComponent/InputComponent";

/**
 * [MarkerListComponent renders list of locations based on props]
 * @extends Component
 */

class MarkerListComponent extends Component {
  render() {
    const {
      markerListStack,
      triggerEditInput,
      isEditing,
      cancelEditInput,
      deleteMarker
    } = this.props;
    return (
      <Fragment>
        {markerListStack && (
          <ul className="markers-list">
            {markerListStack.map((data, key) => {
              return (
                <li key={key} className="col-xs-12 col-sm-6">
                  <div className="content-wrapper">
                    <MarkerListBlock
                      point={data}
                      index={key}
                      editMap={triggerEditInput}
                      isEditing={isEditing}
                      cancelEditInput={cancelEditInput}
                      deleteMarker={deleteMarker}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Fragment>
    );
  }
}

/**
 * [MarkerListBlock Card renderer component]
 * @param {[type]} props [description]
 */

const MarkerListBlock = props => {
  const {
    point,
    index,
    editMap,
    isEditing,
    cancelEditInput,
    deleteMarker
  } = props;
  return (
    <Fragment>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>{point.formatted_address}</Card.Header>
            <Card.Meta>Latitude:</Card.Meta>
            <span>{point.geometry.location.lat()}</span>
            <Card.Meta>Longitude:</Card.Meta>
            <span>{point.geometry.location.lng()}</span>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={e => editMap(point, index)}>
                Edit
              </Button>
              <Button basic color="red" onClick={e => deleteMarker(index)}>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </Fragment>
  );
};
function mapStateToProps({ searchData }) {
  return {
    markerListStack: searchData.coOrdsArray,
    isEditing: searchData.isEditing
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { cancelEditInput, triggerEditInput, deleteMarker },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerListComponent);
