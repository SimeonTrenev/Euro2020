import React from "react";


class AddTeams extends React.Component {
  constructor(props) {
    super(props);
  }

  // onHandleChange = (e) => {
  //     e.preventDefault();
  //     this.setState({ [e.target.name] : e.target.value })

  // }

  // onClickChange = (e) => {
  //     console.log('123')
  // }

  // onSubmitInput = (e) => {
  //     console.log('The input was submitted')
  // }

  render() {
    const { type, label, name, value, onChange } = this.props;

    return (
      <div>
        <div className="ui input">
          <label>{label}</label>
          <input
            type={type}
            placeholder={label} 
            value={value}
            onChange={onChange}
            name={name}
          ></input>
        </div>
          
      </div>
    );
  }
}

export default AddTeams;
