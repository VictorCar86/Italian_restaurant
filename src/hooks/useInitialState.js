import { useState } from "react"

const initialState = {
    guests: "",
    date: "",
    time: "",
    hour: "",
    name: "",
    email: "",
    phone: "",
    birthday: "",
}

function useInitialState(){
    const [state, setState] = useState(initialState)
    return {state, setState}
}

export default useInitialState