import React from 'react'

import ItemForm from './ItemForm'
import Item from './Item'


class Note extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            taskInfo:[]
        }
    }

handleSubmit=(text)=>{
    let itemArray = [...this.state.taskInfo]
    itemArray.push(text)
    this.setState({
        taskInfo: itemArray
    })
}

    render() {

        //build item list
        let itemList = []
        for (let item of this.state.taskInfo){
            itemList.push(
            <Item content={item}/>
            )
        }


        return (

            <div className='card p-4'>
                <h3>
                    Untitled
                </h3>

                {itemList}

                <ItemForm
                handleSubmit = {this.handleSubmit}
                />
            </div>

        )
    }
}

export default Note