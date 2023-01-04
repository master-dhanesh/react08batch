import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Context>
            <App />
        </Context>
    </BrowserRouter>
);

// https://picsum.photos/v2/list
