import React from 'react'
//import './Landing.css'
import logo from '../Logo.png'
import {Link} from 'react-router-dom'

class Landing extends React.Component {
    render() {
        return (

            <div id='wrapper'>{/*overall container*/}
                <div id='background-image'>{/*background image holder*/}
                    <div className="container-fluid">
                        <div className="row justify-content-center"> {/*Logo*/}
                            <div className="col-9 pl-4 mb-5">
                                <img src={logo} width="250" height="140" alt="" />
                            </div>
                        </div>

                        <div className="row justify-content-end" id="slogan">
                            <div className='col-4'>
                                <div>We know your problems <br/> This is your solution <br/> </div>
                            </div>
                        </div>

                        <div className="row justify-content-center"> {/*Button*/}
                            <div className="col-9 pl-4 pt-5">
                                <Link to='/home'>
                                    <button type="button" class="btn btn-primary">Join the club.</button>
                                </Link>
                            </div>
                        </div>



                    </div>
                </div>
            </div>





        )
    }
}

export default Landing;