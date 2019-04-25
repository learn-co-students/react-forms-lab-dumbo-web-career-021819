import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  updateMessageInState = (event) => {
    // console.log(event.target.value)
    this.setState({
      message: event.target.value
    })
    console.log(this.state)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message}
        onChange={this.updateMessageInState} />
        <p>{this.props.maxChars - this.state.message.length} characters left.</p>
        {/* {console.log(this.state.message.length)} */}
      </div>
    );
  }
}

export default TwitterMessage;
