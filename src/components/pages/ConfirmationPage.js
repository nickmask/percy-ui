import React, { Component } from "react";
import { Message, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { confirm } from "../../actions/auth";

class ConfirmationPage extends Component {
  state = {
    isLoading: true,
    success: false
  };

  componentDidMount() {
    this.props
      .confirm(this.props.match.params.token)
      .then(() => this.setState({ isLoading: false, success: true }))
      .catch(() => this.setState({ isLoading: false, success: false }));
  }
  // TODO: Add message from server for when it is not successful.
  // TODO: Add "resend confirmation email" button
  render() {
    const { isLoading, success } = this.state;
    return (
      <div>
        {isLoading && (
          <Message icon>
            <Icon name="circle notched" loading />
            <Message.Header>Validating your email.</Message.Header>
          </Message>
        )}
        {!isLoading &&
          success && (
            <Message success icon>
              <Icon name="checkmark" />
              <Message.Content>
                <Message.Header>
                  Thank you. Your account has been verified.
                </Message.Header>
                <Link to="/dashboard">Go to your dashboard</Link>
              </Message.Content>
            </Message>
          )}
        {!isLoading &&
          !success && (
            <Message negative icon>
              <Icon name="warning sign" />
              <Message.Content>
                <Message.Header>Sorry, invalid token.</Message.Header>
              </Message.Content>
            </Message>
          )}
      </div>
    );
  }
}

ConfirmationPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default connect(null, { confirm })(ConfirmationPage);
