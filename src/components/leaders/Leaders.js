import React from "react";
import Navbar from "../Navbar";
import LeaderCard from "./LeaderCard";
import FormCard from "./FormCard";
import PDFexport from "./PDFexport";

import "./Leaders.css"; //style

class Leaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: [
        [
          "fullName",
          "position",
          ["cert1", "cert2", "cert3", "cert4"],
          ["role1", "role2", "role3", "role4"],
          ["contact1", "contact2", "contact3"]
        ]
      ],

      formCardBool: false,
      deleteButtonBool: false
    };
  }

  toggleForm = () => {
    //toggles Form Card
    this.setState(prevState => {
      return {
        formCardBool: !prevState.formCardBool
      };
    });
  };

  toggleDeleteButtons = () => {
    this.setState(prevState => {
      return {
        deleteButtonBool: !prevState.deleteButtonBool
      };
    });
  };

  handleSubmit = (username, position, certs, roles, contact) => {
    //set Leaders state based on FormCard info

    let leaderInfo = [[username, position, certs, roles, contact]];

    this.setState(prevState => {
      return {
        leaders: prevState.leaders.concat(leaderInfo)
      };
    });

    this.toggleForm();
  };

  deleteLeader = e => {
    let leaderInfo = [...this.state.leaders];
    leaderInfo.splice(e.target.id, 1);

    this.setState({
      leaders: leaderInfo
    });
  };

  buildLeaderCards = () => {
    //iterates state, creating a bunch of leader cards
    let cardArray = [];
    for (let i = 0; i < this.state.leaders.length; i++) {
      //cycles through all leaders
      cardArray.push(
        <LeaderCard
          leaders={this.state.leaders[i]}
          deleteLeader={this.deleteLeader}
          id={i}
          toggleDeleteButtons={this.state.deleteButtonBool}
        />
      );
    }

    return cardArray;
  };

  render() {
    return (
      <div id="leader-wrapper">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              {this.buildLeaderCards()}

              <FormCard
                toggle={this.state.formCardBool}
                handleClose={this.toggleForm}
                handleSubmit={this.handleSubmit}
              />

              <div className="row my-2">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-light mr-3 border"
                    onClick={this.toggleForm}
                  >
                    Add a Leader
                  </button>
                  <button
                    type="button"
                    className="btn btn-light mr-3 border"
                    onClick={this.toggleDeleteButtons}
                  >
                    Delete a Leader
                  </button>
                  <PDFexport leaderArr={this.state.leaders} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leaders;
