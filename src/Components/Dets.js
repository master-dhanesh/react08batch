import React, { useContext } from "react";
import { DataContext } from "../App";

const Dets = () => {
    const [data, setData] = useContext(DataContext);
    return (
        <div>
            <h3>No Data: {data} </h3>
        </div>
    );
};

export default Dets;
