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
      <div className="card mt-2 w-50" id="LeaderCard" key={this.props.id}>
        <div className="card-body">
          <div className="container">
            <div className="row">

              <div className="col" id="name">
                <h3>{this.props.leaders.name}</h3>
              </div>

              <div className='w-100'></div>


              <div className="col" id="position">
                <h4>{this.props.leaders.position}</h4>
              </div>

              <div className='w-100'></div>

              <div className="col" id="cell">
                <div>Cell: {this.props.leaders.cell}</div>
              </div>

              <div className='w-100'></div>

              <div className="col" id="email">
                <div>Email: {this.props.leaders.email}</div>
              </div>

              <div className='w-100'></div>

              <div className="col" id="facebook">
                <div>Facebook: {this.props.leaders.facebook}</div>
              </div>

              <div className='w-100'></div>

              <div className="col" id="instagram">
                <div>Instagram: {this.props.leaders.instagram}</div>
              </div>

              <div className='w-100'></div>

              <div className="col" id="linkedin">
                <div>LinkedIn: {this.props.leaders.linkedin}</div>
              </div>

              <div className='w-100'></div>

              <div className="col" id="certifications">
                <div>Certifications</div>
                <ul>{this.listBuilder(this.props.leaders.certs)}</ul>
              </div>

              <div className='w-100'></div>

              <div className="col" id="roles">
                <div>Roles and Responsibilites</div>
                <ul>{this.listBuilder(this.props.leaders.roles)}</ul>
              </div>

              <div className='w-100'></div>

             

              <div
                className="col"
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
