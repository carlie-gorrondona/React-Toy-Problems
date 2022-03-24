import React, { Component } from 'react';


export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    handleNum1Change (value) {
        this.setState({number1: parseInt(value, 10)})
    }
    handleNum2Change (value) {
        this.setState({number2: parseInt(value, 10)})
    }
    handleSubmit (num1, num2) {
        this.setState({sum: num1 + num2});
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(event) => this.handleNum1Change(event.target.value)}></input>
                <input className="inputLine" onChange={(event) => this.handleNum2Change(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.handleSubmit(this.state.number1, this.state.number2)}>Add It!</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}