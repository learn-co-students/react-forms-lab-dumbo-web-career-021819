import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
     username: "",
     password: ""

    };
  }

  
handleLogin  = event => {
  event.preventDefault()
 
  if (this.state["username"].length > 1 && this.state["password"].length > 1)
  {this.props.handleLogin(this.state)}
  console.log(this.state)
}

handleNameChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  render() {
    return (
      <form onSubmit={event => this.handleLogin(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleNameChange(event)} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleNameChange(event)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
