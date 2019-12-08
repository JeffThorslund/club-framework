import React from "react";

class FormCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      position: "",
      certs: [],
      roles: [],
      contact: []
    };
  }

  handleStringEntry = e => { //updates the value of a string field on a form
    this.setState({
      [e.target.name]: e.target.value
    });
  };

   handlePassedSubmit = e => { //callback function to update Leaders state
    e.preventDefault();
    this.props.handleSubmit(
      this.state.username,
      this.state.position,
      this.state.certs,
      this.state.roles,
      this.state.contact
    );
    this.setState({
      //sets state back to nothing
      username: "",
      position: "",
      cert1: "",
      certs: [],
      roles: [],
      contact: []
    });
  };

  //THIS NEXT SECTION IS FUCKING STUPID. FIGURE OUT HOW TO MAKE THIS METHOD UNIVERSAL

  handleCertsArrEntry = e => { //updates the value of an arr field on a form
    let certsCopy = [...this.state.certs];
    certsCopy[e.target.id] = e.target.value;
    this.setState({
      [e.target.name]: certsCopy
    });
  };

  handleRolesArrEntry = e => { //updates the value of an arr field on a form
    let rolesCopy = [...this.state.roles];
    rolesCopy[e.target.id] = e.target.value;
    this.setState({
      [e.target.name]: rolesCopy
    });
  };

  handleContactArrEntry = e => { //updates the value of an arr field on a form
    let contactCopy = [...this.state.contact];
    contactCopy[e.target.id] = e.target.value;
    this.setState({
      [e.target.name]: contactCopy
    });
  };

 

  formListElement = (name, value, id, toggle, method) => {
    //builds a single input
    return (
      <input
        type="text"
        value={value[id]}
        name={name}
        id={id}
        onChange={method}
        onClick={this.handleAddInput}
        className="form-control mb-2"
        autocomplete="off"
        style={{
            display: toggle ? "none" : "block"
          }}
      />
    );
  };

  formList = (name,value,method) =>{
      let finalArr = [];
      let toggle = false;
      let i = 0

      do {
        finalArr.push(this.formListElement(name, value, i, toggle, method))
        i++
      } while (i<1) //this number shows the amount

      return finalArr
  }

  render() {
    return (
      <div
        className="card mt-2" id='leader-card-wrapper'
        style={{ display: !this.props.toggle ? "none" : "block" }}
      >
        <div className="card-body">
          <div className="container">
            <form onSubmit={this.handlePassedSubmit}>
              <div className="form-row">
                <div class="form-group col-6">
                  <label>Name</label>
                  <input
                    type="text"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleStringEntry}
                    className="form-control"
                    autocomplete="off"
                  />
                </div>

                <div class="form-group col-6">
                  <label>Position</label>

                  <input
                    type="text"
                    value={this.state.position}
                    name="position"
                    onChange={this.handleStringEntry}
                    className="form-control"
                    autocomplete="off"
                  />
                </div>
              </div>

              <div class="form-group">
                <label>Certifications</label>
                {this.formList("certs",this.state.certs, this.handleCertsArrEntry)}
              </div>

              <div class="form-group">
                <label>Roles and Responsibilities</label>
                {this.formList("roles", this.state.roles, this.handleRolesArrEntry)}
              </div>

              <div class="form-group">
                <label>Contact</label>
                {this.formList("contact",this.state.contact, this.handleContactArrEntry)}
              </div>

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
