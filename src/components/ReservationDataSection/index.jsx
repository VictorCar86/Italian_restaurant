import React, { useRef, useState } from 'react'
import "./ReservationDataSection.css"
import { useNavigate } from 'react-router-dom';
import GenericButton from '../GenericButton';

const ReservationDataSection = ({ state, setState }) => {

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

    const [active, setActive] = useState(null)

    function updateActive(elemt){
        setActive(elemt)
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
            <label
                className={
                    active === avaliable ?
                    "ReservationDataSection__grid__label ReservationDataSection__grid__label--active" :
                    "ReservationDataSection__grid__label" }
                htmlFor={avaliable}
                key={index}
                onClick={() => updateActive(avaliable)}
            >
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

    const navigator = useNavigate()

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
        <form
            action='#'
            className='ReservationDataSection'
            ref={form}
            onSubmit={event => event.preventDefault()}
        >
            <h3 className='Title-reservation-pages'>{state.date}</h3>
            <section className='ReservationDataSection__grid'>
                {state.time === "AM" && (
                    createLabels(avaliableTime, state.time)
                )}
                {state.time === "PM" && (
                    createLabels(avaliableTime, state.time)
                )}
            </section>
            <GenericButton text='Submit' onClick={updateState} />
        </form>
    )
}

export default ReservationDataSection