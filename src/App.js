import React from "react";
import Child from "./Child";
import Appcss from "./App.module.css";
const App = () => {
    const s = { fontSize: "4vmax", color: "green" };
    const y = { fontWeight: 900 };
    return (
        <div className="App">
            <nav>
                <h1 className={Appcss.red}>Logo Here</h1>
                <ul>
                    <li style={s}>Home</li>
                    <li>About</li>
                    <li>Content</li>
                </ul>
            </nav>
            <hr />
            <Child />
        </div>
    );
};

export default App;
