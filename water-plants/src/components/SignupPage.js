import React from "react";
import {  WrappedRegistrationForm }  from "./SignupForm";
import { connect } from "react-redux"
import { WrappedNormalLoginForm } from "./LoginForm"
//import { userSignupRequest, userLoginRequest } from "./Actions/SignupActions"
import { register, login } from "../actions/actionCreators"

import PropTypes from 'prop-types';

class SignupPage extends React.Component {
  render() {
    const { register, login } = this.props;
    return (
        <div>
             
            < WrappedRegistrationForm  register={register}  />
            <WrappedNormalLoginForm login={login} />

        </div>
    )
  }
}
SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
} 

export default connect(null,{ register, })(SignupPage);
