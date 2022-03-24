import React, { Component } from 'react';


export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ["computer science", "computer engineering", "information technology", "modern technology", "personal computer"],
            userInput: "",
            filteredArray: []
        }
    }
    handleChange(value) {
        this.setState({userInput: value});
    }
    handleSubmit(prop, unFilteredArray) {
        let filteredArray = [];

        for (let i = 0; i < unFilteredArray.length; i++) {
            if (unFilteredArray[i].includes(prop)) {
                filteredArray.push(unFilteredArray[i]);
            }
        }
        this.setState({filteredArray: filteredArray});
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.handleSubmit(this.state.userInput, this.state.unFilteredArray)}}>Filter It!</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}