import React from 'react'
import './LeaderCard.css'
import { FaTimes } from 'react-icons/fa'

class LeaderCard extends React.Component{

    constructor(props){
        super(props)
    }

    deleteLeader=(e)=>{
        this.props.deleteLeader(e)
    }

    render(){

        //build certification list
        let certArr = []



        for (let i = 3; i < 6; i++) {
            if (this.props.leaders[i].length > 0) {
                certArr.push(
                    <li>
                        {this.props.leaders[i]}
                    </li>
                )
            }
        }


        return(
            <div className='card mt-2' key={this.props.id}>
                <div className='card-body'>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-1 align-items-center  ' id='picture'>
                                <img src={this.props.leaders[0]} alt='cat-pic' className='rounded'/>
                            </div> 

                            <div className='col-4' id='name'> 

                                <h3>
                                    {this.props.leaders[1]} 
                                </h3>

                                <h4>
                                    {this.props.leaders[2]}
                                </h4>
                    
                            </div>   

                            <div className='col-6' id='credentials'>
                                <div>Certifications</div> 
                                <ul>

                                    
                                    {certArr}

                                </ul>
                                
                            </div>

                            <div className='col-1' id='x-icon' style={{display: (this.props.toggleDeleteButtons ? 'block' : 'none')}}>
                                    <button onClick={this.deleteLeader} id={this.props.id} className='btn border'>
                                        x
                                    </button>
                            </div>

                        </div> 

                    </div>

                </div>
                
            </div>
        )
    }
}

export default LeaderCard