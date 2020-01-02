import React from "react";
import Navbar from "../navbar/Navbar";
import FormCard from "./FormCard";
import LeaderCard from "./LeaderCard";

import "./Leaders.css";

class Leaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: [
        {
          name: "Jeff",
          position: "Prez",
          cell: "613-316-9222",
          email: "jeffrey.thorslund@gmail.com",
          facebook: "www.facebook.com/jeffthorslund",
          instagram: "@eastern_wings",
          linkedin: "NO"
        },
        {
          name: "Jeff",
          position: "Prez",
          cell: "613-316-9222",
          email: "jeffrey.thorslund@gmail.com",
          facebook: "www.facebook.com/jeffthorslund",
          instagram: "@eastern_wings",
          linkedin: "NO"
        }
      ],
      formCardBool: false,
      deleteButtonBool: false
    };
  }

  //toggles Form Card

  toggleForm = () => {
    this.setState(prevState => {
      return {
        formCardBool: !prevState.formCardBool
      };
    });
  };

  //toggles delete button on cards

  toggleDeleteButtons = () => {
    this.setState(prevState => {
      return {
        deleteButtonBool: !prevState.deleteButtonBool
      };
    });
  };

  //deletes a leader object from state

  deleteLeader = e => {
    let leaderInfo = [...this.state.leaders];
    leaderInfo.splice(e.target.id, 1);

    this.setState({
      leaders: leaderInfo
    });
  };

  //set Leaders state based on FormCard info

  handleSubmit = info => {
    let leaderInfo = {
      key: 0,
      name: info.fullName,
      position: info.position,
      cell: info.cell,
      email: info.email,
      facebook: info.facebook,
      instagram: info.instagram,
      linkedin: info.linkedin
    };

    this.setState({
      leaders: [...this.state.leaders].concat(leaderInfo)
    });
    this.toggleForm();
  };

  render() {
    //iterates state, creating a bunch of leader cards
    let cardArray = [];
    for (let i = 0; i < this.state.leaders.length; i++) {
      //cycles through all leaders
      cardArray.push(
        <div className="col my-3">
          <LeaderCard
            leaders={this.state.leaders[i]}
            deleteLeader={this.deleteLeader}
            id={i}
            toggleDeleteButtons={this.state.deleteButtonBool}
          />
        </div>
      );
    }

    return (
      <div id="Leader">
        <Navbar />
        <div className="container">
          <div className="row">
            {cardArray}
            </div>

            <div className="row">
              <div className="col-12">
                <div
                  style={{
                    display: !this.state.formCardBool ? "none" : "block"
                  }}
                >
                  <FormCard handleSubmit={this.handleSubmit} />
                </div>
              </div>
              </div>
              <div className="row mt-2">
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-light mr-2 border"
                    onClick={this.toggleForm}
                  >
                    Add a Leader
                  </button>
                  </div>
                  
                  <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-light mr-2 border"
                    onClick={this.toggleDeleteButtons}
                  >
                    Delete Leader
                  </button>
                  </div>
              </div>
            
          
        </div>
      </div>
    );
  }
}

export default Leaders;
