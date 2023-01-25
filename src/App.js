import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Auth from "./Auth";

const App = () => {
    return (
        <div className="container mt-5">
            <Link to="/auth">Authentication</Link>
            <hr />
            <Routes>
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </div>
    );
};

export default App;
