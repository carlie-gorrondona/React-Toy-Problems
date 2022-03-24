import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }
    handleChange (value) {
        this.setState({userInput: value});
    }
    handleSubmit (userInput) {
        let backwards = userInput.split("").reverse().join("");
        
        if (backwards === userInput) {
            this.setState({palindrome: "true"});
        } else {
            this.setState({palindrome: "false"})
        }
    }
    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.handleSubmit(this.state.userInput)}}>Check it!</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}