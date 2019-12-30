import React from "react";

class InputElementArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAmount: 1,
      content: []
    };
  }

  addField = () => {
      this.setState(prevState=>({
        inputAmount: prevState.inputAmount + 1
      }))
    };

updateFormCardState = (e) => {
  let arr = [...this.state.content]
  arr[e.currentTarget.position] = e.currentTarget.value


  this.props.updateFormCardState('certs', )
}


  render() {
    let inputArray = [];

    for (let i = 0; i < this.state.inputAmount; i++) {
      inputArray.push(
        <input
          type="text"
          value={this.props.certs}
          onChange={this.updateFormCardState}
          inputKey="certs"
          position={i}
          autocomplete="off"
          className="form-control mb-2"
        />
      );
    }
//try to intercept the updateFormCardState, make them into an array, then pass to FormCard
    return (
      <div className="form-group">
        <label>{this.props.inputKey}</label>
        {inputArray}

        <div onClick={this.addField}>add</div>
      </div>
    );
  }

}
export default InputElementArray;
