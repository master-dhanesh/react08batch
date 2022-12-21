import axios from "axios";
import React, { Component } from "react";
import Show from "./Show";

class App extends Component {
    state = {
        images: null,
        counter: 0,
        show: false,
    };
    //
    constructor(props) {
        super(props);
        console.log("[App.js] Constructor");
    }

    async GetImages() {
        try {
            const { data } = await axios.get("https://picsum.photos/v2/list");
            this.setState({ images: data });
        } catch (error) {
            console.log(error);
        }
    }

    Increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    Decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    componentDidMount() {
        this.GetImages();
        console.log("[App.js] ComponentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("[App.js] ComponentDidUpdate");
        console.log(prevProps, prevState);
    }

    render() {
        console.log("[App.js] Render");
        console.log(this.state);
        return (
            <div>
                <h1>Hello</h1>
                <button onClick={this.Increment}>+</button>
                <h1>{this.state.counter}</h1>
                <button onClick={this.Decrement}>-</button>
                <hr />
                <button
                    onClick={() => this.setState({ show: !this.state.show })}
                >
                    Show/Hide
                </button>
                {this.state.show ? <Show /> : "Nothing..."}
            </div>
        );
    }
}

export default App;
