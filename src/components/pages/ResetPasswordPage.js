import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
import { validateToken, resetPassword } from "../../actions/auth";

import ResetPasswordForm from "../forms/ResetPasswordForm";

class ResetPasswordPage extends Component {
  state = {
    isLoading: true,
    success: false
  };

  componentDidMount() {
    this.props
      .validateToken(this.props.match.params.token)
      .then(() => this.setState({ isLoading: false, success: true }))
      .catch(() => this.setState({ isLoading: false, success: false }));
  }

  submit = data =>
    this.props
      .resetPassword(data)
      .then(() => this.props.history.push("/login"));

  render() {
    const { isLoading, success } = this.state;
    const { token } = this.props.match.params;
    return (
      <div>
        {isLoading && <Message>Loading</Message>}
        {!isLoading &&
          success && <ResetPasswordForm submit={this.submit} token={token} />}
        {!isLoading && !success && <Message>Invalid token</Message>}
      </div>
    );
  }
}

ResetPasswordPage.propTypes = {
  validateToken: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,

  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { validateToken, resetPassword })(
  ResetPasswordPage
);
