import React from "react";

const Show = (props) => {
    const { gallery, setGallery } = props;
    const DeleteHandler = (i) => {
        const copyFilter = gallery.filter((c, idx) => i !== idx);
        setGallery(copyFilter);
    };

    let cardList = "Loading...";

    if (gallery.length > 0) {
        cardList = gallery.map((c, i) => (
            <div key={i} className="card mb-3 me-3" style={{ width: "18rem" }}>
                <img src={c.image} />
                <div className="card-body">
                    <p className="card-text d-flex justify-content-between">
                        <span>{c.title}</span>
                        <span>{c.author}</span>
                        <i
                            onClick={() => DeleteHandler(i)}
                            className="text-danger ri-delete-bin-2-line"
                        ></i>
                    </p>
                </div>
            </div>
        ));
    }
    return <div className="cards w-100 d-flex flex-wrap">{cardList}</div>;
};

export default Show;
