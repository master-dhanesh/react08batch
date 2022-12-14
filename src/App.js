import React, { useState, useRef } from "react";

const App = () => {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const btnRef = useRef(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const TitleHandler = (e) => {
        setTitle(e.target.value);
        if (titleRef.current.value.length < 4) {
            titleRef.current.style.border = "1px solid red";
            titleRef.current.style.outline = "1px solid red";
        } else {
            titleRef.current.style.border = "initial";
            titleRef.current.style.outline = "initial";
        }

        if (title.length > 3 && desc.length > 3) {
            btnRef.current.disabled = false;
        } else {
            btnRef.current.disabled = true;
        }
    };

    const DescHandler = (e) => {
        setDesc(e.target.value);
        if (descRef.current.value.length < 4) {
            descRef.current.style.border = "1px solid red";
            descRef.current.style.outline = "1px solid red";
        } else {
            descRef.current.style.border = "initial";
            descRef.current.style.outline = "initial";
        }

        if (title.length > 3 && desc.length > 3) {
            btnRef.current.disabled = false;
        } else {
            btnRef.current.disabled = true;
        }
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
        if (title.trim().length === 0 || desc.trim().length === 0) {
            alert("Fields can not be empty");
            return;
        }
        console.log("hello");
    };

    return (
        <div>
            <form onSubmit={SubmitHandler} className="container mt-5 w-50">
                <input
                    className="form-control mb-3"
                    type="text"
                    onChange={TitleHandler}
                    value={title}
                    placeholder="Title"
                    ref={titleRef}
                />
                <textarea
                    className="form-control mb-3"
                    onChange={DescHandler}
                    value={desc}
                    placeholder="Description"
                    ref={descRef}
                ></textarea>
                <button ref={btnRef} className="btn btn-primary">
                    Add
                </button>
            </form>
        </div>
    );
};

export default App;
