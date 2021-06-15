import React from 'react';
import AddTeams from './AddTeams'


class Teams extends React.Component {
    constructor(props) {
      super(props)  
      this.state = {
          country: '',
          teamHistory: '',
          numberOfPlayers: ''
      }
    }

    buttonClicked = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({
            country: '',
            teamHistory: '',
            numberOfPlayers: ''
        })
    }

    onHandleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name] : e.target.value })
     
    }

    render() {
        return(
            <div className="ui container">
                <form>
                <AddTeams 
                type="text" 
                label="Държава"
                name="country"
                value={this.state.country}
                onChange = {this.onHandleChange}
                />
                <AddTeams 
                type="text" 
                label="История"
                name="teamHistory"
                value={this.state.teamHistory}
                onChange = {this.onHandleChange}
                />
                <AddTeams 
                type="text" 
                label="Брой играчи"
                name="numberOfPlayers"
                value={this.state.numberOfPlayers}
                onChange = {this.onHandleChange}
                />

                </form>
                <button onClick={this.buttonClicked} className="ui primary button">Добави</button>
            </div>
        )
    }
}

export default Teams;