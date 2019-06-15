import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  messageLeftCount = () => {
    let num = this.props.maxChars - this.state.message.length
    return num
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.updateMessage(event)} value={this.state.message}/>
        <p>remaining charactors: {this.messageLeftCount()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
