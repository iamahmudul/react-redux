import React from "react";

export class Dummy extends React.Component {
    constructor(props) {
        super();
        /* this.setState({
            text: props.withText
        }) */
    }
    render() {
        return (
            <>
                <h1>Dummy Component</h1>
                {/* {this.state.text} */}
            </>
        )
    };
}