import {Component} from "react";
import React from "react";
import { Smile } from 'react-feather';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
function toggleEmojiPicker() {
  this.setState({
    showEmojiPicker: !this.state.showEmojiPicker,
  });
}
class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  addEmoji = e => {
    let sym = e.unified.split('-')
    let codesArray = []
    sym.forEach(el => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    this.setState({
       text: this.state.text + emoji
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    postMessage(this.state)   //send to backend
    this.setState({ text: '' })  //reset input field to empty
}
constructor() {
  super();
  this.state = {
    // [..]
    showEmojiPicker: false,
  };
  this.toggleEmojiPicker = toggleEmojiPicker.bind(this);
  // [..]
}
  render() {
    const {
      // [..]
      showEmojiPicker,
    } = this.state;

    return (
      <div className="Input">
        <ul>
        {showEmojiPicker ? (
          <Picker onSelect={this.addEmoji} />
          ) : null}
          </ul>
        
        <form onSubmit={e => this.onSubmit(e)}>
        <button
          type="button"
          className="toggle-emoji"
          onClick={this.toggleEmojiPicker}
        >
          <Smile />
        </button>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autofocus="true"
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;
