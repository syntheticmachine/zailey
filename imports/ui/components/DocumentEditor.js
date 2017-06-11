/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import documentEditor from '../../modules/document-editor.js';

export default class DocumentEditor extends React.Component {
  componentDidMount() {
    documentEditor({ component: this });

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
      $('span.tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
      });
    });
  }

  render() {
    const { doc } = this.props;
    return (

      <form ref={ form => (this.documentEditorForm = form) } onSubmit={ event => event.preventDefault() } >

        <div id="tab-1" className="tab-content current">
          <h3 className="page-title">1. Property Details</h3>
          <div className="col-md-12">
            <label>Address</label>
            <input
              className="form-control"
              type="text"
              name="address"
              defaultValue={ doc && doc.address }
            />
          </div>

          <div className="col-md-6">
            <label>City</label>
            <input
              className="form-control"
              type="text"
              name="city"
              defaultValue={ doc && doc.city }
            />
          </div>

          <div className="col-md-6">
            <label>State</label>
            <select className="form-control" type="text" name="state" defaultValue={ doc && doc.state }>
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
            <label>Zipcode</label>
            <input
              className="form-control"
              type="text"
              name="zip"
              defaultValue={ doc && doc.zip }
            />
          </div>

          <div className="col-sm-6">
            <label>Beds</label>
            <input
              className="form-control"
              type="text"
              name="beds"
              defaultValue={ doc && doc.beds }
            />
          </div>

          <div className="col-md-6">
            <label>Baths</label>
            <input
              className="form-control"
              type="text"
              name="baths"
              defaultValue={ doc && doc.baths }
            />
          </div>

          <div className="col-sm-6">
            <label>SQFT</label>
            <input
              className="form-control"
              type="text"
              name="sqft"
              defaultValue={ doc && doc.sqft }
            />
          </div>
          <div className="button-container col-sm-12 text-right">
            <span data-tab="tab-2" className="tab-link btn btn-primary next-btn">Next <i className="ion-arrow-right-c"></i></span>
          </div>
        </div>

        <div id="tab-2" className="tab-content">
          <h3 className="page-title">2. Property Features</h3>
          <div className="features">
            <div className="col-sm-6">
              <label className="tiny-label">Central Air</label>
              <select className="form-control" type="text" name="air" defaultValue={ doc && doc.air }>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="col-sm-6 small-select">
              <label className="tiny-label">Hardwood Flooring</label>
              <select className="form-control" type="text" name="hardwood" defaultValue={ doc && doc.hardwood }>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="col-sm-6 small-select">
              <label className="tiny-label">Fireplace</label>
              <select className="form-control" type="text" name="fireplace" defaultValue={ doc && doc.fireplace }>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="col-sm-6 small-select">
              <label className="tiny-label">RV Parking</label>
              <select className="form-control" type="text" name="rv" defaultValue={ doc && doc.rv }>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="col-sm-6 small-select">
              <label className="tiny-label">Deck</label>
              <select className="form-control" type="text" name="deck" defaultValue={ doc && doc.deck }>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="col-sm-6 small-select">
              <label className="tiny-label">Solar</label>
              <select className="form-control" type="text" name="solar" defaultValue={ doc && doc.solar }>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="col-sm-6 small-select">
              <label className="tiny-label">Pool</label>
              <select className="form-control" type="text" name="pool" defaultValue={ doc && doc.pool }>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="col-sm-6 small-select">
              <label className="tiny-label">Seperate Office</label>
              <select className="form-control" type="text" name="office" defaultValue={ doc && doc.office }>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>
          <div className="button-container">
            <div className="col-sm-6">
              <span data-tab="tab-1" className="tab-link btn btn-primary prev-btn"><i className="ion-arrow-left-c"></i> Previous</span>
            </div>
            <div className="col-sm-6 text-right">
              <span data-tab="tab-3" className="tab-link btn btn-primary next-btn">Next <i className="ion-arrow-right-c"></i></span>
            </div>
          </div>
        </div>

        <div id="tab-3" className="tab-content">
          <h3 className="page-title">3. Describe Your Property</h3>
          <div className="col-sm-12">
            <FormControl
              componentClass="textarea"
              name="body"
              defaultValue={ doc && doc.body }
              placeholder="Your Property Description (Optional)"
            />
          </div>
          <div className="button-container">
            <div className="col-sm-6">
              <span data-tab="tab-2" className="tab-link btn btn-primary prev-btn"><i className="ion-arrow-left-c"></i> Previous</span>
            </div>
            <div className="col-sm-6 text-right">
              <span data-tab="tab-4" className="tab-link btn btn-primary next-btn">Next <i className="ion-arrow-right-c"></i></span>
            </div>
          </div>
        </div>

        <div id="tab-4" className="tab-content">
          <h3 className="page-title">4. Name Your Price</h3>
          <div className="col-sm-12">
            <label>Listing Price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              defaultValue={ doc && doc.price }
            />
            <div className="home-value">
              <i className="ion-help-circled"></i>
              <h5>Not Sure What Your Home's Worth?</h5>
              <a href="https://zailey.com/home-valuations/" target="_blank" className="border-button">Find Your Home's Value</a>
            </div>
          </div>
          <div className="button-container">
            <div className="col-sm-6">
              <span data-tab="tab-3" className="tab-link btn btn-primary prev-btn"><i className="ion-arrow-left-c"></i> Previous</span>
            </div>
            <div className="col-sm-6 text-right">
              <Button type="submit" bsStyle="success">{ doc && doc._id ? 'Save Changes' : 'Create Your Listing' }</Button>
            </div>
          </div>
        </div>


    </form>);
  }
}

DocumentEditor.propTypes = {
  doc: PropTypes.object,
};
