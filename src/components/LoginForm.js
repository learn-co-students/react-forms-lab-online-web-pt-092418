import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
    // have to use above code to get test passed.
    // if (!this.state.username || !this.state.password) {
    //   return this.props.handleLogin(this.state)
    // }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.inputChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.inputChange} value={this.state.password} />
          </label>
        </div>

      </form>
    );
  }
}

export default LoginForm;
