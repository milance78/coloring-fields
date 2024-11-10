import { createContext, useState } from "react";

// creating context
export const FieldsContext = createContext();  

// providing context
export const CustomizedFieldsContextProvider = ({ children }) => {
    const [fields, setFields] = useState([]);

    return <FieldsContext.Provider value={{ fields, setFields }}>
        {/* these children represent everything that is wrapped with provider */}
        {children}
    </FieldsContext.Provider>
}