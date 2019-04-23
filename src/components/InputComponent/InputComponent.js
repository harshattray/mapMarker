/**
 * @Author: harsha
 * @Date:   2019-04-17T23:57:06+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-24T00:24:46+05:30
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, reset } from "redux-form";
import { renderInputFields } from "../renderInputFieldComponent/renderInputFieldComponent";
import { submitFormData } from "../../actions/SearchActions";
import { Button } from "semantic-ui-react";

class InputComponent extends Component {
  handleLocationSubmit = data => {
    if (this.props.point) {
      this.props.submitFormData(data, this.props.point, this.props.index);
    } else {
      this.props.submitFormData(data);
    }
  };
  render() {
    const { handleSubmit, point } = this.props;
    return (
      <form
        name="locationSearchForm"
        onSubmit={handleSubmit(this.handleLocationSubmit)}
        noValidate
        className="form-section"
      >
        <Field
          name="location"
          component={renderInputFields}
          placeholder="First Name"
          type="text"
          required
          label={point ? "Edit Location" : "Enter Location"}
          className="column"
        />
        <span className="search">
          <Button>Search</Button>
        </span>
      </form>
    );
  }
}
function mapStateToProps({ searchData, form }) {
  return {
    searchResults: searchData.getResultsStack
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitFormData }, dispatch);
}

const afterSubmitdata = (result, dispatch) =>
  dispatch(reset("locationSearchForm"));

InputComponent = reduxForm({
  form: "locationSearchForm",
  destroyOnUnmount: false,
  onSubmitSuccess: afterSubmitdata
})(InputComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent);
