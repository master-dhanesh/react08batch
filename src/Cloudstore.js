import React from "react";
import app from "./firebase/config";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    setDoc,
    deleteDoc,
} from "firebase/firestore";
const Cloudstore = () => {
    const db = getFirestore(app);
    const schema = collection(db, "users");

    const createuser = async () => {
        try {
            const docRef = await addDoc(schema, {
                name: "Anney",
                email: "example@anney.com",
            });
            console.log(docRef.id);
        } catch (error) {
            console.log(error);
        }
    };

    const readusers = async () => {
        try {
            const querySnapshot = await getDocs(schema);
            querySnapshot.forEach((doc) => {
                console.log({ id: doc.id, ...doc.data() });
            });
        } catch (error) {
            console.log(error);
        }
    };

    const readsingle = async () => {
        try {
            const docRef = await doc(schema, "0ThzIopM76xYDe9tfFc6");
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
        } catch (error) {
            console.log(error);
        }
    };

    const updateuser = async () => {
        try {
            const docRef = await doc(schema, "pkEmcG7GECJ8hcjUQNbT");
            await setDoc(docRef, {
                name: "John",
                email: "john@example.com",
            });
            console.log("User Updated");
        } catch (error) {
            console.log(error);
        }
    };

    const deleteuser = async () => {
        try {
            const docRef = await doc(schema, "pkEmcG7GECJ8hcjUQNbT");
            await deleteDoc(docRef);
            console.log("User Deleted");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={createuser} className="btn btn-dark">
                Create User
            </button>
            <button onClick={readusers} className="ms-3 btn btn-dark">
                All User
            </button>
            <button onClick={readsingle} className="ms-3 btn btn-dark">
                Single User
            </button>
            <button onClick={updateuser} className="ms-3 btn btn-dark">
                Update User
            </button>
            <button onClick={deleteuser} className="ms-3 btn btn-dark">
                Delete User
            </button>
        </div>
    );
};

export default Cloudstore;
