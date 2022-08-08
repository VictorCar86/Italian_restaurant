import React from 'react'
import "./Menu.css"
import PlatesMenu from '../PlatesMenu'

const Menu = () => {
  return (
    <section className='Menu-section'>
        <h2 className='Menu-section__title title'>Menu</h2>
        <span className='title__addon'></span>
        <p className='description'>Discover the taste</p>
        <div className='Menu-section__list-container'>
            <PlatesMenu
                imgSrc={require("../../assets/images/entries.jpg")}
                alt={"Table with jam, chesse, strawberrys and grapes"}
                title={"Entries"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/breakfast.jpg")}
                alt={"Cooked eggs with avocado and bread"}
                title={"Breakfast"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/lunch_set_menu.jpg")}
                alt={"Plate with mushrooms, lettuce and bread"}
                title={"Launch set menu"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/main_courses.jpg")}
                alt={"Roasted meat with zucchini, tomato and fine herbs"}
                title={"Main courses"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/specialty_pastas.jpg")}
                alt={"Fettuccine with meat and chesse"}
                title={"Specialty pastas"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/pizza.jpg")}
                alt={"Handmade pizza of chicken, chesse and pineapple"}
                title={"Pizza"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/desserts.jpg")}
                alt={"Caramelized slice of bread with blueberries and slices of banana"}
                title={"Desserts"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/fresh_breads.jpg")}
                alt={"Slice of bread followed by grapes and oatmeal"}
                title={"Fresh breads"}
            />
        </div>
        <div className='Menu-section__extra-info-container'>
            <img
                className='Menu-section__extra-info-container__img'
                src={require("../../assets/images/fallon-travels.jpg")}
                alt="Restaurant image"
            />
            <div className='Menu-section__extra-info-container__text-container'>
                <div className='line-addon'></div>
                <span className='Menu-section__extra-info-container__text-container__text'>
                    You are always welcome
                    in our restaurant and <br />
                    we are happy to add your
                    requests to our menu
                </span>
                <div className='line-addon'></div>
            </div>
            <div className='Menu-section__extra-info-container__addon'></div>
        </div>
    </section>
  )
}

export default Menu