import React from "react";
import app from "./firebase/config";
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    listAll,
    ref,
    uploadBytes,
} from "firebase/storage";

const Storage = () => {
    const storage = getStorage(app);

    const uploadHandler = async (e) => {
        let file = e.target.files[0];
        let fileext = file.name.split(".").at(-1);
        let modifiedname = e.target.name + "-" + Date.now() + "." + fileext;
        const storageRef = ref(storage, modifiedname);
        const snapshot = await uploadBytes(storageRef, file);
        if (snapshot) {
            const url = await getDownloadURL(storageRef);
            console.log(url);
        } else {
            console.log("Problem occured!");
        }
    };

    const readAllFiles = async () => {
        const storageRef = ref(storage, "");
        const res = await listAll(storageRef);
        res.prefixes.forEach((folderRef) => {
            console.log(folderRef);
        });
        res.items.forEach(async (itemRef) => {
            const url = await getDownloadURL(ref(storage, itemRef.name));
            console.log(url);
            // console.log(itemRef.name, itemRef.fullPath);
        });
    };

    const deleteFile = async () => {
        const storageRef = ref(storage, "firebase-1674830652388.jpg");
        await deleteObject(storageRef);
        console.log("image deleted!");
    };

    return (
        <div>
            <h3>Storage</h3>
            <input type="file" onChange={uploadHandler} name="firebase" />
            <button onClick={readAllFiles}>Read All Files</button>
            <button onClick={deleteFile}>Delete File</button>
        </div>
    );
};

export default Storage;
