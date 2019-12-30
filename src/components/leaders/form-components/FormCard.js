//FORMIK BRANCH

import React from "react";
import InputElementString from "./InputElementString";
import InputElementArray from "./InputElementArray";

class FormCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      cell: "",
      email: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      certs: [],
      roles: []
    };
  }

  updateFormCardState = (key, value) => {
      this.setState({
      [key]: value
      });
  };

  //callback function to update Leaders state

  handlePassedSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      name: "",
      position: "",
      cell: "",
      email: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      certs: [],
      roles: []
    });
  };

  render() {
    return (
      <div
        className="card mt-2"
        id="leader-card-wrapper"
        style={{ display: !this.props.toggle ? "none" : "block" }}
      >
        <div className="card-body">
          <div className="container">
            <form onSubmit={this.handlePassedSubmit}>
              <div className="form-row">
                <div className="form-group col-6">
                  <label>Name</label>
                  <InputElementString
                    inputKey="name"
                    updateFormCardState={this.updateFormCardState}
                    value={this.state.name}
                  />
                </div>

                <div className="form-group col-6">
                  <label>Position</label>
                  <InputElementString
                    inputKey="position"
                    updateFormCardState={this.updateFormCardState}
                    value={this.state.position}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-6">
                  <label>Cell Phone</label>
                  <InputElementString
                    inputKey="cell"
                    updateFormCardState={this.updateFormCardState}
                    value={this.state.cell}
                  />
                </div>

                <div className="form-group col-6">
                  <label>Email</label>
                  <InputElementString
                    inputKey="email"
                    updateFormCardState={this.updateFormCardState}
                    value={this.state.email}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-4">
                  <label>Facebook</label>
                  <InputElementString
                    inputKey="facebook"
                    updateFormCardState={this.updateFormCardState}
                    value={this.state.facebook}
                  />
                </div>
                <div className="form-group col-4">
                  <label>Instagram</label>
                  <InputElementString
                    inputKey="instagram"
                    updateFormCardState={this.updateFormCardState}
                    value={this.state.instagram}
                  />
                </div>
                <div className="form-group col-4">
                  <label>LinkedIn</label>
                  <InputElementString
                    inputKey="linkedin"
                    updateFormCardStateS={this.updateFormCardState}
                    value={this.state.linkedin}
                  />
                </div>
              </div>

              <InputElementArray 
              inputKey="certs" 
              updateFormCardState={this.updateFormCardState}
              value={this.state.certs}
              />

              <InputElementArray title="Roles and Responsibilities" />

              <button type="submit" className="btn btn-secondary mr-2">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.props.handleClose}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCard;
