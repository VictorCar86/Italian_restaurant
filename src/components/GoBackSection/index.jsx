import React from 'react'
import "./GoBackSection.css"
import { useNavigate } from 'react-router-dom'
import GenericButton from '../GenericButton'

const GoBackSection = () => {

    const navigator = useNavigate()

    return (
        <section className='GoBackSection'>
            <h2 className='GoBackSection__text'>There's no information yet, please fill the required forms</h2>
            <GenericButton
                text='Go back'
                onClick={() => navigator("/reservation")}
            />
        </section>
    )
}

export default GoBackSection