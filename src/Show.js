import React, { Component } from "react";

export default class Show extends Component {
    componentWillUnmount() {
        console.log("[Show.js] ComponentWillUnmount");
        alert("Do you want to leave this page ?");
    }

    render() {
        return <div>Show</div>;
    }
}
