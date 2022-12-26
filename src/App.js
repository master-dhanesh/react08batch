import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import "./Stylesheets/nav.css";
const App = () => {
    return (
        <div className="container w-50 mt-5">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/signin">SignIn</Link>
            </nav>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
};

export default App;
