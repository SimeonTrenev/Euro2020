import React from 'react';
import './Groups.css'

class Groups extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="wrap-div">
                <div className="groups">
                <h2>Group A</h2>
                <h5>Italy</h5>
                <h5>Turkey</h5>
                <h5>Wales</h5>
                <h5>Switzerland</h5>
                </div>
                <div className="groups">
                <h2>Group B</h2>
                <h5>Denmark</h5>
                <h5>Finland</h5>
                <h5>Belgium</h5>
                <h5>Russia</h5>
                </div>
                <div className="groups">
                <h2>Group C</h2>
                <h5>Netherlands</h5>
                <h5>Ukraine</h5>
                <h5>Austria</h5>
                <h5>North Macedonia</h5>
                </div>
                <div className="groups">
                    <h2>Group D</h2>
                    <h5>England</h5>
                    <h5>Croatia</h5>
                    <h5>Scotland</h5>
                    <h5>Czech Republic</h5>
                </div>
                <div className="groups">
                    <h2>Group E</h2>
                    <h5>Spain</h5>
                    <h5>Sweden</h5>
                    <h5>Poland</h5>
                    <h5>Slovakia</h5>
                </div>
                <div className="groups">
                    <h2>Group F</h2>
                    <h5>Hungary</h5>
                    <h5>Portugal</h5>
                    <h5>France</h5>
                    <h5>Germany</h5>
                </div>
            </div>
        )
    }
}

export default Groups;