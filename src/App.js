import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    const [Images, setImages] = useState(null);
    const [Toggle, setToggle] = useState(false);

    const GetImages = async () => {
        const { data } = await axios.get("https://picsum.photos/v2/list");
        setImages(data);
    };

    useEffect(() => {
        if (Images === null) {
            console.log("Get Images Called!");
            GetImages();
        }

        return () => {
            console.log("Deletion..");
        };
    }, [Images]);

    return (
        <div>
            <button onClick={() => setToggle(!Toggle)}>Toggle</button>
            {Toggle ? "Hello There" : "No Hello"}
            <hr />
            {Images ? JSON.stringify(Images) : <h1>Loading...</h1>}
        </div>
    );
};

export default App;
