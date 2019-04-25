import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "Fill in your message",
      chars_left: []
    };
  }

  handleChange = event => {
    console.log(event.target.value.length)
  this.setState({
    [event.target.name]: event.target.value,
  
    chars_left: this.props.maxChars - event.target.value.length
    
  })
}

  render() {

    return (

      <div>
        <strong>Your message:</strong>

        <input type="text" maxLength={this.props.maxChars} name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
        <br/>Max Characters {this.props.maxChars} <br/>
        Remaining chars {this.state.chars_left}
      </div>
    );
  }
}

export default TwitterMessage;
