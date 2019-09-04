import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleCount = event => {
    this.setState({
      message: event.target.value
    })
  };

  remaining = () => {
    let char = this.props.maxChars - this.state.message.length;
    return char
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form>
        <input type="text" name="message" id="message" onChange={this.handleCount} value={this.state.message}/>
        </form>
        <p>Characters left: {this.remaining()}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default TwitterMessage;
