import React, { useState } from "react";
import Show from "./Components/Show";

const App = () => {
    const [gallery, setGallery] = useState([]);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!title.trim() || !author.trim() || !image.trim()) {
            alert("makadeee.....");
            return;
        }
        const newData = { title, author, image };
        // const copyGallery = [...gallery];
        // copyGallery.push(newData);
        // setGallery(copyGallery);
        setGallery([...gallery, newData]);
        setTitle("");
        setAuthor("");
        setImage("");
    };

    return (
        <div>
            <form onSubmit={SubmitHandler} className="w-50 container mt-5">
                <input
                    className="form-control mb-4 fs-4"
                    type="text"
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <input
                    className="form-control mb-4 fs-4"
                    type="text"
                    placeholder="author"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />
                <input
                    className="form-control mb-4 fs-4"
                    type="text"
                    placeholder="image url"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                />
                <button className="btn btn-success w-50 fs-4">Add</button>
            </form>

            {/*  */}
            <hr className="container" />
            <Show gallery={gallery} setGallery={setGallery} />
        </div>
    );
};

export default App;
