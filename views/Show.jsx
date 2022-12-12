import React from "react";

class Show extends React.Component {
    render () {
        console.log(this.props.fruit);
        const fruit = this.props.fruit;
        return (
            <div>
                <h1 className="title">Show Route</h1>
                <a href="/pokemon" className="backToHome">Back To Homepage</a>
            </div>
        )
    }
}

export default Show;