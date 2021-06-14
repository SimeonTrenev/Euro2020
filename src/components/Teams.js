import React from 'react';

class Teams extends React.Component {
    constructor(props) {
      super(props)  
    }

    render() {
        return(
            <div className="ui container">
                <h4>Teams</h4>
                <h6>{this.props.teams}</h6>
            </div>
        )
    }
}

export default Teams;