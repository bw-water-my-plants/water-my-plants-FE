    import React from "react";
import { connect } from "react-redux"
import { WrappedNormalLoginForm } from "./Login"
//import { userSignupRequest, userLoginRequest } from "./Actions/SignupActions"
import { login } from "../../actions/actionCreators"

import PropTypes from 'prop-types';

class LoginPage extends React.Component {
  render() {
    const { login } = this.props;
    return (
        <div>
            <WrappedNormalLoginForm login={login} {...this.props} />
        </div>
    )
  }
}
LoginPage.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null,{ login })(LoginPage);