import React, { useState } from "react";
import { addUser } from "../store/UserSlice/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Add = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const user = {
            username,
            email,
        };
        dispatch(addUser(user));
        navigate("/show");
    };

    return (
        <form onSubmit={SubmitHandler} className="w-25">
            <input
                className="form-control mb-3"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="form-control mb-3"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="w-50 btn btn-primary">Add User</button>
        </form>
    );
};

export default Add;
