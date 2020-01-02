import React from 'react'
import logo from '../Logo.png'
import {Link} from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component{
    

    render(){
        return(
            <div>
                <nav id='nav' className="navbar navbar-expand my-0 py-0">
                    <Link to='/'>
                        <div className="navbar-brand my-0 py-0" >
                            <img src={logo} width="80" height="50" alt=""/>    
                        </div>
                    </Link>

                    <ul className='navbar-nav ml-auto my-0 py-0'>

                        <Link to='/home' id='noStyle'>
                            <li  className='nav-item mx-4'>
                                <div className="nav-link">HOME</div>
                            </li>
                        </Link>

                        <Link to='/leaders' id='noStyle'>
                            <li className='nav-item mx-4'>
                                <div className="nav-link">LEADERS</div>
                            </li>
                        </Link>

                        <Link to='/tasks' id='noStyle'>
                            <li className='nav-item mx-4'>
                                <div className="nav-link">TASKS</div>
                            </li>
                        </Link>

                        <Link to='/calendar' id='noStyle'>
                            <li className='nav-item mx-4'>
                                <div className="nav-link">CALENDAR</div>
                            </li>
                        </Link>

                        <Link to='/formik-leaders' id='noStyle'>
                            <li className='nav-item mx-4'>
                                <div className="nav-link">FORMIK LEADERS</div>
                            </li>
                        </Link>

                        {/*
                        <li className='nav-item mx-4'>
                            <a className="nav-link" href="www.google.com">FINANCE</a>
                        </li>

                        <li className='nav-item mx-4'>
                            <a className="nav-link" href="www.google.com">ASSETS</a>
                        </li>

                        <li className='nav-item mx-4'>
                            <a className="nav-link" href="www.google.com">SETTINGS</a>
                        </li>
                        
                        */}
                        
                        
                        
                    </ul>


    

                    
                </nav>
            </div>
        )

    }
}

export default Navbar;