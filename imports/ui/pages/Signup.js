import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleSignup from '../../modules/signup';

export default class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
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
        <div className="signup-background"></div>
        <div className="Signup signup-form">
          <img className="login-logo" src="http://zailey.com/wp-content/uploads/2017/03/Zailey-Maps-Icon-2.png" />
          <h4>Create An Account</h4>
          <form ref={ form => (this.signupForm = form) } className="login" onSubmit={ this.handleSubmit }>
            <div className="col-sm-6">
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                ref="firstName"
                name="firstName"
              />
            </div>
            <div className="col-sm-6">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                ref="lastName"
                name="lastName"
              />
            </div>
            <div className="col-sm-6">
              <label>City</label>
              <input
                className="form-control"
                type="text"
                ref="userCity"
                name="userCity"
              />
            </div>
            <div className="col-sm-6">
              <label>State</label>
              <select className="form-control" type="text" ref="userState" name="userState">
                <option value="blank"></option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>
            <div className="col-sm-6">
              <label>Phone Number</label>
              <input
                className="form-control"
                type="text"
                ref="userPhone"
                name="userPhone"
              />
            </div>
            <div className="col-sm-6">
              <label>Email Address</label>
              <input
                className="form-control"
                type="text"
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
            <Button type="submit" bsStyle="success">Create Account</Button>
          </form>
        </div>
      </div>
    );
  }
}
