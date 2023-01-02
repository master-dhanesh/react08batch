import React, { useState, createContext } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import User from "./Components/User";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import "./Stylesheets/nav.css";
import Timeline from "./Components/Timeline";
import Navigation from "./Components/Navigation";

export const DataContext = createContext(null);

const App = () => {
    const [data, setData] = useState("Normal Data.");
    return (
        <div className="container w-50 mt-5">
            <Navigation />
            <hr />
            <DataContext.Provider value={[data, setData]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/:name" element={<Timeline />} />
                    <Route path="/signin" element={<Signin />}>
                        <Route path="/signin/profile" element={<Profile />} />
                        <Route path="/signin/user" element={<User />} />
                    </Route>
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </DataContext.Provider>
        </div>
    );
};

export default App;
