import React from 'react'

class FormCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            position: "",
            cert1: "",
            cert2: "",
            cert3: ""
        }
    }

    handleEntry = (e) => {//updates the value of a field on a form
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlePassedSubmit = (e) => { //callback function to update Leaders state
        e.preventDefault()
        this.props.handleSubmit(this.state.username, this.state.position, this.state.cert1, this.state.cert2, this.state.cert3, this.state.role);
        this.setState({//sets state back to nothing
            username: "",
            position: "",
            cert1: "",
            cert2: "",
            cert3: "",
            roles: ""
        })
    }


    render() {

        return (
            <div className='card mt-2' style={{ display: (!this.props.toggle ? 'none' : 'block') }}>
                <div className='card-body'>
                    <div className='container'>

                        <form onSubmit={this.handlePassedSubmit}>
                            <div className='form-row'>
                                <div class="form-group col-6">
                                    <label>
                                        Name
                                        </label>

                                    <input
                                        type='text'
                                        value={this.state.username}
                                        name="username"
                                        onChange={this.handleEntry}
                                        className="form-control"
                                        autocomplete="off"
                                    />
                                </div>

                                <div class="form-group col-6">
                                    <label>
                                        Position
                                        </label>

                                    <input
                                        type='text'
                                        value={this.state.position}
                                        name="position"
                                        onChange={this.handleEntry}
                                        className="form-control"
                                        autocomplete="off"
                                    />
                                </div>

                            </div>

                            <div class="form-group">
                                <label>
                                    Certifications
                                        </label>

                                <input
                                    type='text'
                                    value={this.state.cert1}
                                    name="cert1"
                                    onChange={this.handleEntry}
                                    className="form-control mb-2"
                                    autocomplete="off"
                                />

                                <input
                                    type='text'
                                    value={this.state.cert2}
                                    name="cert2"
                                    onChange={this.handleEntry}
                                    style={{ display: (this.state.cert1.length === 0 ? "none" : "block") }}
                                    className="form-control mb-2"
                                    autocomplete="off"
                                />

                                <input
                                    type='text'
                                    value={this.state.cert3}
                                    name="cert3"
                                    onChange={this.handleEntry}
                                    style={{ display: (this.state.cert2.length === 0 ? "none" : "block") }}
                                    className="form-control"
                                    autocomplete="off"
                                />
                            </div>

                            <button type='submit' className="btn btn-secondary mr-2">
                                Submit
                                    </button>

                            <button type='button' className="btn btn-secondary" onClick={this.props.handleClose}>
                                Close
                                    </button>

                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default FormCard