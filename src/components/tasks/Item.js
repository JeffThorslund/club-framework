import React from 'react'
import LeaderPopup from './LeaderPopup'


import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
import { AiOutlineUserAdd } from "react-icons/ai";

class ItemForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            taskedLeaders: '',
            showPop: false
        }
    }

    //includes checkbox, item name, leader assignment 
    //style={{textDecoration:this.state.checked?'text-decoration':'block'}}

    handleLeaderSelect = (leader) => {
        this.setState({
            taskedLeaders: leader
        })
    }

    handleToggle = () => {
        this.setState(prevState => ({
            showPop: !prevState.showPop
        }))
    }

    handleCheckedToggle = () => {
        this.setState(prevState => ({
            checked: !prevState.checked
        }))
    }

    handleDelete = (e) => {

    }

    render() {
        return (
            <div>
                <div className='container border p-3'>
                    <div className='row'>
                        <div className='col-1' onClick={this.handleCheckedToggle}>
                            <FaRegCheckCircle
                                style={{ display: this.state.checked ? 'block' : 'none' }}
                            />
                            <FaRegCircle
                                style={{ display: !this.state.checked ? 'block' : 'none' }}
                            />
                        </div>

                        <div className='col-8' style={{ textDecoration: this.state.checked ? "line-through" : "none" }}>
                            {this.props.content}
                        </div>

                        <div className='col-1'>
                            <div className='align-middle' onClick={this.handleToggle}>
                                <AiOutlineUserAdd />
                            </div>
                        </div>

                        <div className='col-1'>
                            <div className='align-middle' onClick={this.handleDelete}>
                                
                            </div>
                        </div>

                        <div>
                            {this.state.taskedLeaders}
                        </div>

                        <LeaderPopup
                            selection={this.handleLeaderSelect} toggle={this.state.showPop} closeMenu={this.handleToggle} />

                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemForm