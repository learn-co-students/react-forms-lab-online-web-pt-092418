import React from "react";

class LoginForm extends React.Component {
  constructor() {
      super();

    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="text" onChange={this.handleChange} value={this.state.password}/>
          </label>
        </div>
          <button type="submit">Log in</button>
      </form>
    );
  }
}

export default LoginForm;
