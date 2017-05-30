import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleLogin from '../../modules/login';

export default class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
    Meteor.defer(function(){
      $(".EditDocument .form-control").parent().addClass("active-label");
      $(".form-control").focus(function(){
        $(this).parent().addClass("active-label");
      });
      $(".form-control").blur(function() {
        if($(this).val() !== '') {
          $(this).parent().addClass("active-label");
        } else {
          $(this).parent().removeClass("active-label");
        }
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="login-background"></div>
        <div className="Login login-form">
          <img className="login-logo" src="http://zailey.com/wp-content/uploads/2017/03/Zailey-Maps-Icon-2.png" />
          <h4>Login To Zailey</h4>
          <form ref={ form => (this.loginForm = form) } className="login" onSubmit={ this.handleSubmit }>
            <div className="col-md-12 form-padding">
              <label>Email Address</label>
              <input
                className="form-control"
                type="email"
                ref="emailAddress"
                name="emailAddress"
              />
            </div>
            <div className="col-md-12 form-padding">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                ref="password"
                name="password"
              />
            </div>
            <div className="spacer"></div>
            <Button type="submit" bsStyle="success">Login</Button>
          </form>
        </div>
      </div>
    );
  }
}
