import React, { useContext, useRef, useState } from 'react'
import "./ReservationFormPage.css"
import Navbar from '../../components/Navbar'
import SecondaryNav from '../../components/SecondaryNav'
import ReservationSection from '../../components/ReservationSection'
import { AppContext } from '../../context/AppProvider'
import GoBackSection from '../../components/GoBackSection'
import GenericButton from '../../components/GenericButton'
import Modal from '../../utils/Modal'
import CongratsModal from '../../components/CongratsModal'

const ReservationFormPage = () => {

    const [modal, setModal] = useState(false)

    const pages = [
        {
            title: "Reservation",
            route: "/reservation"
        },
        {
            title: "Data",
            route: "/reservation/data"
        },
    ]

    const { state, setState } = useContext(AppContext)

    const form = useRef(null)

    const updateState = () => {
        const formData = new FormData(form.current)

        if (formData.get("text") !== "" &&
            formData.get("email") !== "" &&
            formData.get("phone") !== "" &&
            formData.get("date") !== ""
          ){
          setState({
            ...state,
            name: formData.get("text"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            birthday: formData.get("date"),
          })
          setModal(!modal)
        }
        else {
          alert("Complete the entire form")
        }
        console.log(Object.fromEntries(formData), state)
    }

    return (
      <>
          <Navbar />
          <main className='ReservationFormPage'>
            <SecondaryNav pages={pages} titlePage='Form' />
            <ReservationSection special="true" >
              {state.date && (
                <section className='ReservationFormPage__section'>
                    <h3 className='Title-reservation-pages'>Every element is required</h3>
                    <form action="#" ref={form} onSubmit={event => event.preventDefault()}>
                      <div className='ReservationFormPage__section__grid'>
                        <input type="text" placeholder='name' name='text' />
                        <input type="email" placeholder='e-mail' name="email" />
                        <input type="tel" placeholder='phone' name="phone" />
                        <input
                          type="text"
                          name="date"
                          placeholder='birthday'
                          onFocus={prev => prev.target.type="date"}
                          onBlur={prev => prev.target.type="text"}
                        />
                      </div>
                      <h3 className='ReservationFormPage__section__summary'>Summary</h3>
                      <h3 className='ReservationFormPage__section__expected'>Expect {state.guests} guests on {state.date} at {state.hour} {state.time}</h3>
                      <GenericButton text='Submit' onClick={updateState} />
                    </form>
                </section>
              )}
              {!state.date && <GoBackSection />}
            </ReservationSection>
          </main>
          {modal && (
            <Modal>
              <CongratsModal toggleState={setModal} >
                <p style={{fontSize: "2rem"}}>Thank you for your visit to us!</p>
                <p style={{fontSize: "2rem"}}>We look forward to hearing from you!</p>
              </CongratsModal>
            </Modal>
          )}
      </>
    )
}

export default ReservationFormPage