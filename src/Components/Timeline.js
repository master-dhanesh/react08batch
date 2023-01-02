import React from "react";
import Dets from "./Dets";
import { useParams, useLocation, Link } from "react-router-dom";

const Timeline = () => {
    const { name } = useParams();
    const location = useLocation();
    return (
        <div>
            <h1>Welcome {name} 👋</h1>
            <Dets />
            <Link to="/">Home</Link>
        </div>
    );
};

export default Timeline;
