import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/features/counter/counterSlice";

const App = () => {
    const dispatch = useDispatch();
    const a = useSelector((state) => state);
    console.log(a);

    const incrementValue = () => {
        dispatch(increment());
    };

    return (
        <div>
            <button onClick={incrementValue}>+</button>
        </div>
    );
};

export default App;
