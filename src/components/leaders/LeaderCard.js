import React from "react";

class LeaderCard extends React.Component {
  constructor(props) {
    super(props);
  }

  //Accepts the deleteLeader method from Leader.js
  deleteLeader = e => {
    this.props.deleteLeader(e);
  };

  //builds an arr into a list
  listBuilder = arr => {
    let finalArr = [];
    for (let item in arr) {
      finalArr.push(<li>{arr[item]}</li>);
    }
    return finalArr;
  };

  render() {
    return (
      <div className="card mt-2" id='leader-card-wrapper' key={this.props.id}>
        <div className="card-body" >
          <div className="container">
            <div className="row">
              <div className="col-3" id="name-position">
                <h3>{this.props.leaders[0]}</h3> {/*Displays fullName*/}
                <h4>{this.props.leaders[1]}</h4>
              </div>

              <div className="col-3" id="certifications">
                <div>Certifications</div>
                <ul>{this.listBuilder(this.props.leaders[2])}</ul>
              </div>

              <div className="col-3" id="roles">
                <div>Roles and Responsibilites</div>
                <ul>{this.listBuilder(this.props.leaders[3])}</ul>
              </div>

              <div className="col-3" id="contact">
                <div>Contact Info</div>
                <ul>{this.listBuilder(this.props.leaders[4])}</ul>
              </div>

              <div
                className="col-1"
                id="x-icon"
                style={{
                  display: this.props.toggleDeleteButtons ? "block" : "none"
                }}
              >
                <button
                  onClick={this.deleteLeader}
                  id={this.props.id}
                  className="btn border"
                >
                  x
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderCard;
