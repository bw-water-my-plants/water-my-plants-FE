import React from "react";
import {  WrappedRegistrationForm }  from "./SignupForm";
import { connect } from "react-redux"
import { userSignupRequest } from "./Actions/SignupActions"

import PropTypes from 'prop-types';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
        <div>
      
            < WrappedRegistrationForm  userSignupRequest={userSignupRequest}  />

        </div>
    )
  }
}
SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
} 

export default connect(null,{ userSignupRequest })(SignupPage);
