import React from 'react'
import Navbar from '../Navbar'
import LeaderCard from './LeaderCard'
import FormCard from './FormCard'
import PDFexport from './PDFexport'

import './Leaders.css'

class Leaders extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leaders: [
                ['https://picsum.photos/80', "Jeffrey Thorslund", 'Retired Pres', "","",""]
            ],

            formCardBool: false,
            deleteButtonBool: false
        }
    }

toggleForm=()=>{ //toggles Form Card
    this.setState(prevState=>{
        return{
            formCardBool: !prevState.formCardBool
        }
    })
}

toggleDeleteButtons=()=>{
    this.setState(prevState=>{
        return{
        deleteButtonBool: !prevState.deleteButtonBool
        }
    })
}

handleSubmit = (username, position,cert1, cert2, cert3, role) => { //set Leaders state based on FormCard info
    
    let leaderInfo = [['https://picsum.photos/80', username, position, cert1, cert2, cert3, role]]
    
    this.setState(prevState => {
        return {
           leaders: prevState.leaders.concat(leaderInfo) 
        }
    })

    this.toggleForm()

}

deleteLeader = (e) => {
    let leaderInfo = [...this.state.leaders]
    leaderInfo.splice(e.target.id, 1)

    this.setState({
        leaders:leaderInfo
    })


    

}

buildLeaderCards = () =>{ //iterates state, creating a bunch of leader cards
    let cardArray = []
    for (let i=0; i < this.state.leaders.length; i++){ //cycles through all leaders
        cardArray.push(
            <LeaderCard 
                leaders = {this.state.leaders[i]}
                deleteLeader = {this.deleteLeader}
                id = {i}
                toggleDeleteButtons = {this.state.deleteButtonBool}
                 />
        )
    }
    
    return cardArray
}

render() {

    return (
        <div id='wrapper'>
            <Navbar />
            <div className="container">
                <div className='row'>
                    <div className='col'>


                        {this.buildLeaderCards()}

                        <FormCard 
                            toggle={this.state.formCardBool} 
                            handleClose={this.toggleForm}
                            handleSubmit={this.handleSubmit}/>

                        <div className='row my-2'>
                            <div className='col'>
                                <button type="button" className="btn btn-light mr-3 border" onClick={this.toggleForm}>Add a Leader</button>
                                <button type="button" className="btn btn-light mr-3 border" onClick={this.toggleDeleteButtons}>Delete a Leader</button>
                                <PDFexport leaderArr={this.state.leaders} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default Leaders;