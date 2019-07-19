import React from "react";
import { throws } from "assert";

class TwitterMessage extends React.Component {
  
  state = {
    input: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.input} type="text" name="message" id="message" />
        <h1>{this.props.maxChars - this.state.input.length}</h1>
      </div>
    );
  }
}

export default TwitterMessage;