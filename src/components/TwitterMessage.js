import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  remainingChars = (num) => {
    return this.props.maxChars - num;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        <p>You have {this.remainingChars(this.state.message.length)} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
