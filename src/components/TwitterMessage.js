import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    const maxChars = props.maxChars || 140;
    this.state = {
      maxChars: maxChars,
      remainingChars: maxChars
    };
  }
    handleChange = event => {
      // if (event.preventDefault) {
      //   event.preventDefault();
      // }
      this.setState({
        value: event.target.value,
        remainingChars: this.state.maxChars - event.target.value.length
      });
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={ (e) => this.handleChange(e) }
        />
        <div>{this.state.remainingChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
