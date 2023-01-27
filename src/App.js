import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Cloudstore from "./Cloudstore";
import Storage from "./Storage";

const App = () => {
    return (
        <div className="container mt-5">
            <Link to="/auth">Authentication</Link>
            <Link to="/data">Cloud Store</Link>
            <Link to="/media">Storage Media</Link>
            <hr />
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/data" element={<Cloudstore />} />
                <Route path="/media" element={<Storage />} />
            </Routes>
        </div>
    );
};

export default App;
