import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? "red" : "")}
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
    );
};

export default Navigation;
