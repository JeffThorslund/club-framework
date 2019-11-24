import React from 'react'
import * as jsPDF from 'jspdf'

class PDFexport extends React.Component {
    constructor(props) {
        super(props)
    }
    handleExport = (e) => {

        let doc = new jsPDF()
        
        let leaderInfo=[]
        for (let item in this.props.leaderArr){
            leaderInfo = leaderInfo.concat(this.props.leaderArr[item])
        }

        doc.text(this.props.leaderArr[0], 10, 10)
        


        
        doc.save('a4.pdf')
    }


    render() {
        return (
            
                <button type="button" className="btn btn-light border" onClick={this.handleExport}>
                    Export PDF
                </button>
            
        )
    }
}

export default PDFexport