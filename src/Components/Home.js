import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="d-flex flex-column">
            <Link to="/user/john">John Doe</Link>
            <Link to="/user/joe">Joe Doe</Link>
            <Link to="/user/michel">Michel Doe</Link>
            <Link to="/user/json">Json Doe</Link>
        </div>
    );
};

export default Home;
