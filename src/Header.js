import React, { Component } from 'react';

class Header extends Component {

  handleKeyPress (event) {
    if (event.target.value != ""){
    if (event.key === 'Enter') {
      console.log(event.target.value);
      this.props.sendWordsToApp(event.target.value)
    }
    }
  }

  render () {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus
        onKeyPress={this.handleKeyPress.bind(this)} />
      </header>
    )
  }
}

export default Header
