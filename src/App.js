import React, { Component } from "react";
import axios from "axios";
import loader from "./assets/loader.gif";
class App extends Component {
    //

    constructor(props) {
        super(props);
        this.state = {
            images: null,
        };
        console.log("[App.js] Constructor");
    }

    async getImages() {
        try {
            const { data } = await axios.get("https://picsum.photos/v2/list");
            console.log(data);
            this.setState({ images: data });
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getImages();
        console.log("[App.js] ComponentDidMount");
    }

    render() {
        console.log("[App.js] Render");
        return (
            <div>
                <h1>This is App.js Class Component.</h1>

                {/* <button onClick={this.getImages}>Get Images</button> */}
                {this.state.images ? (
                    JSON.stringify(this.state.images)
                ) : (
                    <img src={loader} alt="" />
                )}
            </div>
        );
    }
}

export default App;
