import React, { useState } from "react";
import Create from "./Components/Create";
import Show from "./Components/Show";
const App = () => {
    const [gallery, setGallery] = useState([]);
    return (
        <div className="container">
            <Create gallery={gallery} setGallery={setGallery} />
            <hr />
            <Show gallery={gallery} setGallery={setGallery} />
        </div>
    );
};

export default App;
