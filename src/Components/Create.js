import React, { useState } from "react";

const Create = (props) => {
    const { gallery, setGallery } = props;
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newData = { title, author, image };
        setGallery([...gallery, newData]);
        setTitle("");
        setAuthor("");
        setImage("");
    };

    return (
        <>
            <h3 className="mt-5">Gallley React App...</h3>
            <form onSubmit={SubmitHandler} className="w-50">
                <div className="mb-3">
                    <input
                        placeholder="Title"
                        type="text"
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="mb-3">
                    <input
                        placeholder="Author"
                        type="text"
                        className="form-control"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                </div>
                <div className="mb-3">
                    <input
                        placeholder="Image Url"
                        type="text"
                        className="form-control"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Create;
