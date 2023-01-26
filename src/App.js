import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Cloudstore from "./Cloudstore";

const App = () => {
    return (
        <div className="container mt-5">
            <Link to="/auth">Authentication</Link>
            <Link to="/data">Cloud Store</Link>
            <hr />
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/data" element={<Cloudstore />} />
            </Routes>
        </div>
    );
};

export default App;
