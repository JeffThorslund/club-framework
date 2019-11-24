import React from 'react'
import Note from './Note'

class Pad extends React.Component{
    render(){
        return(
            <div className='border rounded p-4 m-4'>
                This is a pad
                <Note />
            </div>
        )
    }
}

export default Pad

//Dont need to use it. 