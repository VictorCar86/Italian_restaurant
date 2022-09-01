import React, { createContext, useState } from "react";
import useInitialState from "../hooks/useInitialState";

export const AppContext = createContext();

function AppProvider({ children }){

    const contextState = useInitialState()

    return (
        <AppContext.Provider value={ contextState }>
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider