import React from 'react'
import Navbar from '../Navbar'

import Pad from './Pad'
import Note from './Note'


class Tasks extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            numNotes:2
        }
    }

    render(){

        let noteArr = []
        for (let i = 0; i<this.state.numNotes; i++){
            noteArr.push(
                <div className='col-6'>
                    <Note />
                </div>
            )
        }

        return(
            <div>
                <Navbar />
                <div className = 'container' style={{fontFamily: 'Alata'}}>
                    <div className = 'row'>
                        
                    {noteArr}

                    </div>
                   
                </div>
            </div>
        )
    }

}

export default Tasks