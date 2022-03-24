import React, { Component } from 'react';


export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [{name: "Carlie", age: 28}, {name: "Ivan", nationality: "American"}, {species: "dog", name: "Chai"}],
            userInput: '',
            filterArray: []
        }
    }
    handleChange(value) {
        this.setState({userInput: value});
    }
    handleSubmit(prop, unFilteredArray) {
        let filterArray = [];

        for (let i = 0; i < unFilteredArray.length; i++) {
            if (unFilteredArray[i].hasOwnProperty(prop)) {
                filterArray.push(unFilteredArray[i]);
            }
        }
        this.setState({ filterArray: filterArray });
    }
    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{ JSON.stringify(this.state.unFilteredArray) }</span>
                <input className='inputLine' onChange={(event => this.handleChange(event.target.value))}></input>
                <button className='confirmationButton'onClick={() => {this.handleSubmit(this.state.userInput, this.state.unFilteredArray)}}>Filter it!</button>
                <span classname='resultsBox filterObjectRB'>{JSON.stringify(this.state.filterArray)}</span>
            </div>
        );
    }
}