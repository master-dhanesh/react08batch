import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import User from "./Components/User";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import "./Stylesheets/nav.css";
const App = () => {
    return (
        <div className="container w-50 mt-5">
            <nav>
                <NavLink
                    className={`${({ isActive }) =>
                        isActive ? "red" : ""} navlinks`}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "red" : "")}
                    to="/signup"
                >
                    SignUp
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "red" : "")}
                    to="/signin"
                >
                    SignIn
                </NavLink>
            </nav>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
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
