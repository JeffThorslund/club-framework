import React from "react";
import Navbar from "../navbar/Navbar";
import FormCard from "./FormCard"

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
      name: info.name,
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
    /*let cardArray = [];
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
    }*/

    return (
      <div id="Leader">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              {/*{cardArray}*/}

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
