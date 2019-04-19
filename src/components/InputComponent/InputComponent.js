/**
 * @Author: harsha
 * @Date:   2019-04-17T23:57:06+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-20T03:34:36+05:30
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, reset } from "redux-form";
import { renderInputFields } from "../renderInputFieldComponent/renderInputFieldComponent";
import { submitFormData } from "../../actions/SearchActions";

class InputComponent extends Component {
  handleLocationSubmit = data => {
    this.props.submitFormData(data);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form
          name="locationSearchForm"
          onSubmit={handleSubmit(this.handleLocationSubmit)}
          noValidate
        >
          <Field
            name="location"
            component={renderInputFields}
            placeholder="First Name"
            type="text"
            required
            label="First Name"
            className="column"
          />
          <button size="huge" color="blue" className="pull-left">
            Search
          </button>
        </form>
      </div>
    );
  }
}
function mapStateToProps({ searchData, form }) {
  console.log(searchData, "data Stack");
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
