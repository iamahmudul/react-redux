import React from "react";

export class Dummy extends React.Component {
    render() {
        return (
            <>
                <h1>Dummy Component</h1>
                {this.props.withText}
            </>
        )
    };
}