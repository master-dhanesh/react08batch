import React from "react";
import loader from "../assets/loader.gif";

const Show = (props) => {
    const { gallery, setGallery } = props;

    const DeleteHandler = (index) => {
        const copyGallery = [...gallery];
        copyGallery.splice(index, 1);
        setGallery(copyGallery);
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

    return <div className="container d-flex flex-wrap">{cardlist}</div>;
};

export default Show;
