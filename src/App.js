import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import User from "./Components/User";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import "./Stylesheets/nav.css";
import Timeline from "./Components/Timeline";
import Navigation from "./Components/Navigation";
import { DataContext } from "./Context/Context";

const App = () => {
    const x = useContext(DataContext);
    console.log(x);

    return (
        <div className="container w-50 mt-5">
            <Navigation>Hello</Navigation>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:name" element={<Timeline />} />
                <Route path="/signin" element={<Signin />}>
                    <Route path="/signin/profile" element={<Profile />} />
                    <Route path="/signin/user" element={<User />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
};

export default App;
