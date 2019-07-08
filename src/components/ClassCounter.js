import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }))
    }

    decrement = () => {
        this.setState(prevState => ({ counter: prevState.counter === 1 ? prevState.counter : prevState.counter - 1 }))
    }

    render() {
        return (
            <>
                <button onClick={this.increment}>+</button>
                <span>{ this.state.counter }</span>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
}