import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {message: ""};
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  remainingChars = event => {
    let chars = this.props.maxChars - this.state.message.length
    return chars
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form>
          <input type="text" name="message" id="message" onChange={this.handleMessageChange} value={this.state.message} />
        </form>
        <p>Remaining Characters: {this.remainingChars()}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default TwitterMessage;
