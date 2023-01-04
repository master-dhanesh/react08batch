import React, { useContext } from "react";
import { DataContext } from "../Context/Context";

const Dets = () => {
    const [data, setData] = useContext(DataContext);
    return (
        <div>
            <h3>No Data: {data} </h3>
        </div>
    );
};

export default Dets;
