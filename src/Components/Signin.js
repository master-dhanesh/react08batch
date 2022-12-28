import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
const Signin = () => {
    const navigate = useNavigate();
    const SigninSubmit = (e) => {
        e.preventDefault();
        navigate("/signin/profile");
    };
    return (
        <>
            <form onSubmit={SigninSubmit}>
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="@johndoe_"
                />
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="********"
                />
                <button className=" w-25 btn btn-primary">Sign In</button>
                <button
                    type="button"
                    onClick={() => navigate("/signin/user")}
                    className=" w-25 btn btn-primary"
                >
                    Goto user
                </button>
            </form>
            <hr />

            <Outlet />
        </>
    );
};

export default Signin;
