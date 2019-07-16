import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleUsernameChange = evt => {
    this.setState ({
      username: evt.target.value
    })
  }
  handlePasswordChange = evt => {
    this.setState ({
      password: evt.target.value
    })
  }
  handleSubmit = evt =>{
    evt.preventDefault();

    console.log(`got to handleSumit with username ${this.state.username} and password ${this.state.password}`);
    if (!this.state.username || !this.state.password) {
      console.log('username or password missing so returning');
      return;
    }
    console.log('calling handleLogin');
    this.props.handleLogin(this.state);
  }
  render() {
    return (
      <form onSubmit={(evt) => this.handleSubmit(evt)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={evt => this.handleUsernameChange(evt)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={evt =>this.handlePasswordChange(evt)}/>
          </label>
        </div>
        <div>
          <button type="submit" value="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
