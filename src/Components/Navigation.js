import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../App";

const Navigation = () => {
    const d = useContext(DataContext);
    console.log(d);
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
