import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }){

    function contextState(){
        const initialState = {
            guest: undefined,
            date: undefined,
            time: undefined,
            hour: undefined,
            name: undefined,
            email: undefined,
            phone: undefined,
            birthday: undefined,
        }

        const [state, setState] = useState(initialState)

        return {state, setState}
    }

    const resolveContextState = contextState()

    return (
        <AppContext.Provider value={ resolveContextState }>
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider