import React from 'react'

class CalHeader extends React.Component {
    constructor(props) {
        super(props)

        this.handleMonthIncrease = this.handleMonthIncrease.bind(this)
    }

    handleMonthIncrease(e) {
        this.props.monthIncrease(e)
    }

    render() {

        return (
            <div>
                <h1>
                    {this.props.month.format('MMMM YYYY')}
                </h1>

                <button onClick={this.handleMonthIncrease} id='down'>
                    Decrease
                </button>

                <button onClick={this.handleMonthIncrease} id='up'>
                    Increase
                </button>


            </div>
        )
    }


}

export default CalHeader