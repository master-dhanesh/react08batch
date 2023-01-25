import React, { useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import app from "./firebase/config";

const Auth = () => {
    const [user, setUser] = useState("Logged-out");
    const auth = getAuth(app);

    const loggedIn = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.uid);
            } else {
                setUser("Logged-out");
            }
        });
    };

    useEffect(() => {
        loggedIn();
    }, []);

    const signup = () => {
        createUserWithEmailAndPassword(auth, "john@doe.com", "123456")
            .then((userCrediential) => {
                setUser(userCrediential.user.uid);
            })
            .catch((err) => {
                console.log(err.code);
                console.log(err.name);
                console.log(err.message);
            });
    };

    const signin = () => {
        signInWithEmailAndPassword(auth, "john@doe.com", "123456")
            .then((userCrediential) => {
                setUser(userCrediential.user.uid);
            })
            .catch((err) => {
                console.log(err.code);
                console.log(err.name);
                console.log(err.message);
            });
    };

    const signout = () => {
        signOut(auth)
            .then(() => {
                setUser("Logged-out");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h3>user: {user ? user : "no user"}</h3>
            <button onClick={signup} className="btn btn-dark">
                Signup
            </button>
            <button onClick={signin} className="ms-3 btn btn-success">
                Signin
            </button>
            <button onClick={signout} className="ms-3 btn btn-success">
                Signout
            </button>
        </div>
    );
};

export default Auth;
