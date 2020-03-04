import React from "react";
import api from "../service";
import PropTypes from "prop-types";
import "../assets/css/ResetPasswordForm.css";

class ResetPasswordForm extends React.Component {
  state = {
    user: {
      email: "",
      password: "",
      cfPassword: ""
    },
    notMatch: false
  };

  handleChange = e =>
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state.user;
    const body = { email, newPassword: password };
    api
      .resetPassword(`/api/user/reset_password`)
      .reset(body)
      .then(() => this.props.history.push("/signin"));
  };

  render() {
    const { password, cfPassword, email } = this.state.user;
    return (
      <div className="body-reset-wrapper">
        <form className="form-reset-wrapper" onSubmit={this.handleSubmit}>
          {this.state.notMatch && (
            <p className="help-reset">Password not match!</p>
          )}
          <div className="field">
            <div className="control">
              <label className="label">Email</label>
              <input
                className={this.state.notMatch ? `input is-danger` : `input`}
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="your current email"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="label">New password</label>
              <input
                className={this.state.notMatch ? `input is-danger` : `input`}
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="your new password"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="label">Confirm new password</label>
              <input
                className={this.state.notMatch ? `input is-danger` : `input`}
                type="password"
                name="cfPassword"
                value={cfPassword}
                onChange={this.handleChange}
                placeholder="confirm your new password"
              />
            </div>
          </div>

          <div className="control">
            <button style={{ marginLeft: "auto" }} className="button is-info">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ResetPasswordForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default ResetPasswordForm;
