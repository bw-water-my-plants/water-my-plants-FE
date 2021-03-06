import React from "react";
import {  WrappedRegistrationForm }  from "./SignupForm";
import { connect } from "react-redux";
import { register } from "../../actions/actionCreators";

import PropTypes from 'prop-types';

class SignupPage extends React.Component {
  render() {
    const { register } = this.props;
    return (
        <div>
            < WrappedRegistrationForm  userSignupRequest={register}  />
        </div>
    )
  }
}
SignupPage.propTypes = {
  register: PropTypes.func.isRequired
} 

export default connect(null,{ register })(SignupPage);
