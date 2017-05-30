/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import partnerEditor from '../../modules/partner-editor.js';

export default class PartnerEditor extends React.Component {
  componentDidMount() {
    partnerEditor({ component: this });

    Meteor.defer(function(){
      $(".EditPartner .form-control").parent().addClass("active-label");
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

  render() {
    const { partner } = this.props;
    return (
      <form
        ref={ form => (this.partnerEditorForm = form) }
        onSubmit={ event => event.preventDefault() }
      >

      <div className="col-md-12">
        <label>Industry</label>
        <input
          className="form-control"
          type="text"
          name="industry"
          defaultValue={ partner && partner.industry }
        />
      </div>

      <div className="col-md-6">
        <label>City</label>
        <input
          className="form-control"
          type="text"
          name="city"
          defaultValue={ partner && partner.city }
        />
      </div>

      <div className="col-md-6">
        <label>State</label>
        <select className="form-control" type="text" name="state" defaultValue={ partner && partner.state }>
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

      <div className="col-sm-12">
        <label>Company Name</label>
        <input
          className="form-control"
          type="text"
          name="companyName"
          defaultValue={ partner && partner.companyName }
        />
      </div>

      <div className="col-sm-6">
        <label>Phone</label>
        <input
          className="form-control"
          type="text"
          name="phone"
          defaultValue={ partner && partner.phone }
        />
      </div>

      <div className="col-md-6">
        <label>Email</label>
        <input
          className="form-control"
          type="text"
          name="email"
          defaultValue={ partner && partner.email }
        />
      </div>

      <div className="col-sm-6">
        <label>Website</label>
        <input
          className="form-control"
          type="text"
          name="website"
          defaultValue={ partner && partner.website }
        />
      </div>

      <div className="col-sm-12">
        <FormControl
          componentClass="textarea"
          name="bio"
          defaultValue={ partner && partner.bio }
          placeholder="Please Describe Your Business"
        />
      </div>
      <div className="col-sm-12">
        <Button type="submit" bsStyle="success">
          { partner && partner._id ? 'Save Changes' : 'Add Partner' }
        </Button>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </form>);
  }
}

PartnerEditor.propTypes = {
  partner: PropTypes.object,
};
