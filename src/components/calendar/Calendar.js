import React from 'react'

import Navbar from '../Navbar'
import CalHeader from './CalHeader'
import DateContainer from './DateContainer'

import moment from 'moment'



class Calendar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentMonth: moment()
        }
        this.handleMonthIncrease=this.handleMonthIncrease.bind(this)
    }

    handleMonthIncrease(e){

        let updatedMonth = null

        if (e.target.id==='up'){
            updatedMonth = moment(moment(this.state.currentMonth.format('YYYY-MM'))).add(1, 'month')
        }

        else if (e.target.id==='down'){
            updatedMonth = moment(moment(this.state.currentMonth.format('YYYY-MM'))).subtract(1, 'month')
        }

        else{
            alert('that is B A D')
        }


        
        this.setState({
            currentMonth: updatedMonth
        })
    }

    render() {

        return (
            <div>
                <Navbar />
                <CalHeader 
                month={this.state.currentMonth}
                monthIncrease={this.handleMonthIncrease}
                /> 
                <DateContainer month={this.state.currentMonth}/>
                
            </div>
        )
    }
}

export default Calendar