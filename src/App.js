import React, { Component } from 'react'
import './App.css'
import GuessCount from "./GuessCount";
import Card from "./Card";

class App extends Component {
    handleClickCard(card) {
        console.log(card, 'clicked')
    }

  render() {
    return (
        <div className="memory" >
          <GuessCount guesses={0} />
          <Card card="😄" feedback="hidden" onClick={this.handleClickCard} />
          <Card card="💖" feedback="justMatched" onClick={this.handleClickCard} />
          <Card card="🎩" feedback="justMismatched" onClick={this.handleClickCard} />
          <Card card="🐶" feedback="visible" onClick={this.handleClickCard} />
          <Card card="🐱" feedback="hidden" onClick={this.handleClickCard} />
          <Card card="🎉" feedback="justMatched" onClick={this.handleClickCard} />
        </div>
    )
  }
}

export default App
