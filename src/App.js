import React, { useState, useRef } from "react";

const App = () => {
    const inputUsername = useRef(null);
    const buttonC = useRef(null);
    const ChangeHandler = async (e) => {
        let i = inputUsername.current;
        if (i.value.length < 5) {
            i.style.outline = "1px solid red";
            i.style.border = "1px solid red";
            buttonC.current.disabled = true;
        } else {
            i.style.outline = "initial";
            i.style.border = "initial";
            buttonC.current.disabled = false;
        }
    };
    return (
        <div>
            <form className="container mt-5 pt-5 ">
                <input
                    className="form-control w-50"
                    type="text"
                    placeholder="username"
                    onChange={ChangeHandler}
                    ref={inputUsername}
                />
                <br />
                <button ref={buttonC} className="mt-3 btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
