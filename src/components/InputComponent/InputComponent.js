/**
 * @Author: harsha
 * @Date:   2019-04-17T23:57:06+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-24T23:59:51+05:30
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { reduxForm, Field, reset } from "redux-form";
import { RenderInputFields } from "../renderInputFieldComponent/renderInputFieldComponent";
import { submitFormData } from "../../actions/SearchActions";
import { validate } from "../../helpers/validate";

/**
 * [InputComponent handles both location search and edit location]
 * @extends Component
 */

class InputComponent extends Component {
  /**
   * [handleLocationSubmit submit function triggers submitFormData based on params passed to it]
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  handleLocationSubmit = data => {
    if (this.props.point) {
      this.props.submitFormData(data, this.props.point, this.props.index);
    } else {
      this.props.submitFormData(data);
    }
  };
  render() {
    const { handleSubmit, point, invalid, submitting } = this.props;
    return (
      <form
        name="locationSearchForm"
        onSubmit={handleSubmit(this.handleLocationSubmit)}
        noValidate
        className="form-section"
      >
        <Field
          name="location"
          component={RenderInputFields}
          placeholder={
            point ? "Enter Location to be updated" : "Enter Location here"
          }
          type="text"
          required
          label={point ? "Edit Location" : "Enter Location"}
          className="column"
        />
        <Button className="search" disabled={invalid} loading={submitting}>
          Search
        </Button>
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
  validate,
  form: "locationSearchForm",
  destroyOnUnmount: false,
  onSubmitSuccess: afterSubmitdata
})(InputComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent);
