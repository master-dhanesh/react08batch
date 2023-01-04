import { createContext, useState } from "react";

export const DataContext = createContext(null);

const Context = (props) => {
    const [data, setData] = useState("Dummy");
    return (
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    );
};

export default Context;
