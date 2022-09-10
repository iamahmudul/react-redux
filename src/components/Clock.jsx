import React from "react";

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: (new Date())
        }
    }

    tick() {
        this.setState({
            currentTime: (new Date())
        })
        /* this.setState((state, props) => ({
            currentTime: (new Date())
        })) */
    }

    componentDidCatch() {
        console.log("componentDidCatch");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timerID)
    }

    render() {

        return (
            <span>{ this.state.currentTime.toLocaleTimeString() }</span>
        );
    }
}