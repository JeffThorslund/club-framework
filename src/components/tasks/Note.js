import React from "react";

import ItemForm from "./ItemForm";
import Item from "./Item";
import NoteTitle from "./NoteTitle";
import OptionsMunu from "./OptionsMenu";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInfo: [],
      optionsShowing: false,
      visible: true
    };
  }
  handleSubmit = text => {
    if (text.length > 0) {
      let itemArray = [...this.state.taskInfo];
      itemArray.push(text);
      this.setState({
        taskInfo: itemArray
      });
    }
  };

  showOptionsMenu = () => {
    this.setState(prevState => ({
      optionsShowing: !prevState.optionsShowing
    }));
  };

  deleteNote = (index) => { 
    this.props.deleteNote(index)
  }

  render() {
    //build item list
    let itemList = [];
    for (let item of this.state.taskInfo) {
      itemList.push(<Item content={item} getLength={this.testItem} />);
    }
    return (
      <div className="card p-4" style={ this.state.visible ? { display:'block'} : {display : 'none'} }>
        <NoteTitle /> {this.props.index}

        {itemList}
        <ItemForm handleSubmit={this.handleSubmit} />

        <div onClick={this.showOptionsMenu}>
          ...
          <OptionsMunu 
          optionsShowing={this.state.optionsShowing} 
          deleteNote={this.deleteNote}
          index={this.props.index}
          />
        </div>
      </div>
    );
  }
}

export default Note;
