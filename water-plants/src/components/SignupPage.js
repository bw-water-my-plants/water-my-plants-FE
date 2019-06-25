import React from "react";
import SignupForm from "./SignupForm";
import { connect } from "react-redux"
import { userSignupRequest } from "./Actions/SignupActions"
import PropTypes from 'prop-types';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return <SignupForm userSignupRequest={userSignupRequest} />;
  }
}
SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
} 

export default connect(null,{ userSignupRequest })(SignupPage);
