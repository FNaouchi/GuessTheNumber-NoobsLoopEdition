import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      daNumber: Math.ceil(Math.random() * 100),
      text1: "Guess Right to Escape the Loop of Noobs!",
      text2: `Tries Remaining: 5`,
      lives: 5,
      playing: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
  }
  handleChange(event) {
    this.setState({ number: event.target.value });
  }
  checkGuess(number) {
    let guessNumber = this.state.daNumber;
    if (number <= 100 && number >= 1) {
      if (this.state.playing === true) {
        if (number === guessNumber) {
          this.setState({ text1: "YOU DID IT!!! But wait..." });
          this.setState({ text2: "Looks like someone lied about escaping :)" });
          this.setState({ playing: false });
        } else if (number - guessNumber > 0 && number - guessNumber <= 5) {
          this.setState({ text1: "Just a tiny bit lower" });
          this.setState({ text2: `Tries Remaining: ${this.state.lives}` });
        } else if (number - guessNumber > 5 && number - guessNumber <= 20) {
          this.setState({ text1: "A little bit lower" });
          this.setState({ text2: `Tries Remaining: ${this.state.lives}` });
        } else if (number - guessNumber > 20 && number - guessNumber <= 50) {
          this.setState({ text1: "Go Lower!" });
          this.setState({ text2: `Tries Remaining: ${this.state.lives}` });
        } else if (number - guessNumber > 50) {
          this.setState({
            text1: "Way too high...like... skyscrapper high..."
          });
          this.setState({ text2: `Tries Remaining: ${this.state.lives}` });
        } else if (number - guessNumber < 0 && number - guessNumber >= -5) {
          this.setState({ text1: "Just a tiny bit higher" });
          this.setState({ text2: `Tries Remaining: ${this.state.lives}` });
        } else if (number - guessNumber < -5 && number - guessNumber >= -20) {
          this.setState({ text1: "Up a little" });
          this.setState({ text2: `Tries Remaining: ${this.state.lives}` });
        } else if (number - guessNumber < -20 && number - guessNumber >= -50) {
          this.setState({ text1: "Climb Up Bro!" });
          this.setState({ text2: `Tries Remaining: ${this.state.lives}` });
        } else if (number - guessNumber < -50) {
          this.setState({ text1: "Way too low...catch a plane..." });
          this.setState({ text2: `Tries Remaining: ${this.state.lives}` });
        }
        this.setState({ lives: this.state.lives - 1 });
        if (this.state.lives === 0) {
          this.setState({ playing: false });
          this.setState({ text1: "It's Official... You are a Noob!!!" });
          this.setState({ text2: "Game Over" });
        }
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container mt-5">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3 className={{ color: "green" }}>{this.state.text1}</h3>
          <br />
          <br />
          <input
            type="number"
            placeholder="1 - 100"
            min="1"
            max="100"
            onChange={this.handleChange}
            style={{ width: 100 }}
          />
          <button
            onClick={() => this.checkGuess(parseInt(this.state.number, 10))}
          >
            Try!
          </button>
          <br />
          <br />
          <h4 className={{ color: "green" }} wait={2500}>
            {this.state.text2}
          </h4>
        </div>
      </div>
    );
  }
}

export default App;
