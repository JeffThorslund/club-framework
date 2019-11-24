import React from 'react'
import CalForm from './CalForm'


class DateCell extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showForm: false,
            eventName:""
        }

        this.toggleCalForm=this.toggleCalForm.bind(this)
        this.updateCellData=this.updateCellData.bind(this)
    }

    toggleCalForm(){
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }))
    }

    updateCellData(eventName){
        this.setState({
            eventName: eventName
        })
    }

    render(){

        return(
            <div>
                <div id='date-cell' onClick={this.toggleCalForm}>

                {this.props.dateNumber + 1} <br/>
                {this.state.eventName}



                </div>

            <CalForm visibility={this.state.showForm} toggle={this.toggleCalForm} update={this.updateCellData}/>

            </div>
            
        )
    }
}








class VoidCell extends React.Component{

    render(){
        return(
            <div id='void-cell'>
                 
            </div>
        )
    }
}

export {DateCell, VoidCell}