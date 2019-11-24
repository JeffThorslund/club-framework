import React from 'react'
import './CalForm.css'

class CalForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            eventName:""
        }

        this.handleEscape = this.handleEscape.bind(this)
        this.stopPropagation = this.stopPropagation.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleEscape() {
        this.props.toggle()
    }

    stopPropagation(e) {
        e.stopPropagation()
    }

    handleSubmit(e){
        this.props.update(this.state.eventName)
        {this.handleEscape()}
        e.preventDefault()
    }

    handleChange(e){
        this.setState({
            eventName: e.target.value
        })
    }

    render() {
        return (
            <div id='body-wrapper' onClick={this.handleEscape} style={{ visibility: (this.props.visibility ? 'visible' : 'hidden') }}>
                <div id='body' onClick={this.stopPropagation}>
                    <form  onSubmit={this.handleSubmit}>
                        <label>
                            Event Name:
                            <input type='text' onChange={this.handleChange} value={this.state.eventName}/>
                            <button type='submit' > Create Event </button>
                        </label>
                    </form>
                </div>
            </div>


        )
    }
}

export default CalForm