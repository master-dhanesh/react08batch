import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignupSubmit = (e) => {
        e.preventDefault();
        const user = { username, email, password };
        console.log(user);
        // some code of backend database
        navigate("/signin");
    };

    return (
        <form onSubmit={SignupSubmit}>
            <input
                className="form-control mb-3"
                type="text"
                placeholder="@johndoe_"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <input
                className="form-control mb-3"
                type="email"
                placeholder="john@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                className="form-control mb-3"
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button className=" w-25 btn btn-primary">Sign Up</button>
        </form>
    );
};

export default Signup;
