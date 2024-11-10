import { createContext, useState } from "react";

// creating context
export const CurrentColorContext = createContext();  

// providing context
export const CustomizedCurrentColorContextProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('yellow');

    return <CurrentColorContext.Provider value={{ currentColor, setCurrentColor }}>
        {/* these children represent everything that is wrapped with provider */}
        {children}
    </CurrentColorContext.Provider>
}