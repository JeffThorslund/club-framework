import React from 'react'
import { DateCell, VoidCell } from './DateCell'
import './DateContainer.css'

import moment from 'moment'

class DateContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMonth: this.props.month //get rid of this
        }
    }

    buildHeader=()=>{
        let weekdayHeaders = []
        let weekdayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", "Saturday", 'Sunday']

        for (let i = 0; i < 7; i++) { //creates the headers
            weekdayHeaders.push(
                <div key={i}>
                    {weekdayArray[i]}
                </div>
            )
        }

        return weekdayHeaders
    }

    buildDates=()=>{//two years behind current day and two years after current day
        
        let monthArr = [] //stores all the month blocks. 

        let startDate = moment().subtract(12, 'M') //sets one year before current date
        let endDate = moment().add(12,'M')
        let diff = endDate.diff(startDate, 'months')

        for(let x=0; x<diff; x++){//one cycle per month

            let cellArr = []//holds date cells for one month

            let firstVoids = () => { //finds amount of first void cells.

                if (Number(startDate.format('e')) === 0) {
                    return 6
                }

                else {
                    return startDate.format('e') - 1
                }
            }

            let dateCells = startDate.daysInMonth() //finds amount of date cells.
            
            let lastVoids = () => { //finds amount of last void cells.
                if (35 - firstVoids() - dateCells < 0) {
                    return 35 - firstVoids() - dateCells + 7
                }
    
                else {
                    return 35 - firstVoids() - dateCells
                }
            }

            for (let j = 0; j < firstVoids(); j++) { //first set of void cells. 
                cellArr.push(<div key={'voidcell' + startDate.format('M') + j}>
                    <VoidCell />
                </div>)
            }

            for (let j = 0; j < dateCells; j++) { //date cells. 
                cellArr.push(<div key={'datecell' + startDate.format('M') + j}>
                    <DateCell 
                    dateNumber={j}/>
                </div>)
            }

            for (let j = 0; j < lastVoids(); j++) { //last void cells.
                cellArr.push(<div key={'lastvoid' + this.props.month.format('M')+ j}>
                    <VoidCell />
                </div>)
            }
            
            monthArr.push(<div style={{display:(true ? 'none':'block')}}> 
                {cellArr}
            </div>) //turns them all off

            startDate.add(1,'M')
        }
        
        return monthArr;
    }



    render() {

        console.log(this.buildDates())

        

        return (       
                <div id='parent'>
                    {this.buildHeader()}
                    {this.buildDates()}
                </div>
        )
    }
}

export default DateContainer