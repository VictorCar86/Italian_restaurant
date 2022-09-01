import React, { useRef } from 'react'

const ReservationDataSection = ({ state }) => {

    const avaliableTime = {
        AM: [
            "10:00",
            "10:15",
            "10:30",
            "10:45",
            "11:00",
            "11:15",
            "11:30",
            "11:45",
        ],
        PM: [
            "18:15",
            "18:30",
            "18:45",
            "19:00",
            "19:15",
            "19:30",
            "19:45",
            "20:00",
        ]
    }

    function createLabels(data, time){
        let actualTime = "";

        if (time === "AM" || time === "PM"){
            actualTime = time
        }
        else {
            return new Error("Insert string argument with AM or PM")
        }

        return data[actualTime].map((avaliable, index) => (
            <label htmlFor={avaliable} key={index}>
                {avaliable}
                <input
                    type="radio"
                    name="hour"
                    id={avaliable}
                    value={avaliable}
                />
            </label>
        ))
    }

    const form = useRef(null)

    function updateState(){
        const formData = new FormData(form.current)

        if (formData.has("hour")
        ){
            setState({
                ...state,
                hour: formData.get("hour"),
            })
            navigator("/reservation/data/form")
        }
        else {
            alert("Complete the entire form")
        }
        console.log(Object.fromEntries(formData), state)
    }

    return (
        <form action='#' ref={form} onSubmit={event => event.preventDefault()}>
            <h3>{state.date}</h3>
            {state.time === "AM" && (
                createLabels(avaliableTime, state.time)
            )}
            {state.time === "PM" && (
                createLabels(avaliableTime, state.time)
            )}
            <button type='submit' onClick={updateState} >Submit</button>
        </form>
    )
}

export default ReservationDataSection