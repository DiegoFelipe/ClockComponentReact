import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentWillMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <h2>{this.state.date.toLocaleTimeString()}</h2>
        )
    }
}
