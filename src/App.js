import React, { useState } from "react";
import loader from "./assets/loader.gif";

const App = () => {
    const [gallery, setGallery] = useState([]);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");

    const DeleteHandler = (index) => {
        // console.log(index);

        const copyGallery = [...gallery];
        copyGallery.splice(index, 1);

        // const copyGallery = gallery.filter((g, i) => i !== index);

        setGallery(copyGallery);
    };

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

    let cardlist = (
        <p className="text-center w-100">
            <img width={400} src={loader} />
        </p>
    );

    if (gallery.length > 0) {
        cardlist = gallery.map((card, index) => (
            <div
                key={index}
                className="card me-3 mb-3"
                style={{ width: "18rem" }}
            >
                <img src={card.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text d-flex justify-content-between align-items-center">
                        <span>
                            {card.title} | {card.author}
                        </span>
                        <i
                            onClick={() => DeleteHandler(index)}
                            className="fs-4 text-danger ri-delete-bin-6-line"
                        ></i>
                    </p>
                </div>
            </div>
        ));
    }

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
            <hr className="container" />

            <div className="container d-flex flex-wrap">{cardlist}</div>
        </div>
    );
};

export default App;
