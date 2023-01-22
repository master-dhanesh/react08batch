import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const GalleryDetails = () => {
    const { id } = useParams();
    const Image = useSelector((state) => state.images.images).filter(
        (i) => id === i.id
    )[0];
    console.log(Image);
    return (
        <div>
            {Image ? (
                <>
                    <h3>{Image.author}</h3>
                    <img height="300" src={Image.download_url} alt="" />
                </>
            ) : (
                "Loading..."
            )}
        </div>
    );
};

export default GalleryDetails;
