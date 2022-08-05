import React from 'react'
import "./Menu.css"

const Menu = () => {
  return (
    <section className='Menu-section'>
        <h2 className='Menu-section__title title'>Menu</h2>
        <span className='title__addon'></span>
        <p className='Menu-section__description'>Discover the taste</p>
        <div className='Menu-section__list-container'>
            <div className='Menu-section__list-container__item-container'>
                <img
                    className='Menu-section__list-container__item-container__img'
                    src={require("../../assets/images/entries.jpg")}
                    alt="Table with jam, chesse, strawberrys and grapes"
                />
                <h5 className='Menu-section__list-container__item-container__title'>Entrees</h5>
                <p className='Menu-section__list-container__item-container__link'>View menu</p>
                <span className='Menu-section__list-container__item-container__addon'></span>
            </div>
            <div className='Menu-section__list-container__item-container'>
                <img
                    className='Menu-section__list-container__item-container__img'
                    src={require("../../assets/images/breakfast.jpg")}
                    alt="Cooked eggs with avocado and bread"
                />
                <h5 className='Menu-section__list-container__item-container__title'>Breakfast</h5>
                <p className='Menu-section__list-container__item-container__link'>View menu</p>
                <span className='Menu-section__list-container__item-container__addon'></span>
            </div>
            <div className='Menu-section__list-container__item-container'>
                <img
                    className='Menu-section__list-container__item-container__img'
                    src={require("../../assets/images/lunch_set_menu.jpg")}
                    alt="Plate with mushrooms, lettuce and bread"
                />
                <h5 className='Menu-section__list-container__item-container__title'>Launch set menu</h5>
                <p className='Menu-section__list-container__item-container__link'>View menu</p>
                <span className='Menu-section__list-container__item-container__addon'></span>
            </div>
            <div className='Menu-section__list-container__item-container'>
                <img
                    className='Menu-section__list-container__item-container__img'
                    src={require("../../assets/images/main_courses.jpg")}
                    alt="Roasted meat with zucchini, tomato and fine herbs"
                />
                <h5 className='Menu-section__list-container__item-container__title'>Main courses</h5>
                <p className='Menu-section__list-container__item-container__link'>View menu</p>
                <span className='Menu-section__list-container__item-container__addon'></span>
            </div>
            <div className='Menu-section__list-container__item-container'>
                <img
                    className='Menu-section__list-container__item-container__img'
                    src={require("../../assets/images/specialty_pastas.jpg")}
                    alt="Fettuccine with meat and chesse"
                />
                <h5 className='Menu-section__list-container__item-container__title'>Specialty pastas</h5>
                <p className='Menu-section__list-container__item-container__link'>View menu</p>
                <span className='Menu-section__list-container__item-container__addon'></span>
            </div>
            <div className='Menu-section__list-container__item-container'>
                <img
                    className='Menu-section__list-container__item-container__img'
                    src={require("../../assets/images/pizza.jpg")}
                    alt="Handmade pizza of chicken, chesse and pineapple"
                />
                <h5 className='Menu-section__list-container__item-container__title'>Pizza</h5>
                <p className='Menu-section__list-container__item-container__link'>View menu</p>
                <span className='Menu-section__list-container__item-container__addon'></span>
            </div>
            <div className='Menu-section__list-container__item-container'>
                <img
                    className='Menu-section__list-container__item-container__img'
                    src={require("../../assets/images/desserts.jpg")}
                    alt="Caramelized slice of bread with blueberries and slices of banana"
                />
                <h5 className='Menu-section__list-container__item-container__title'>Desserts</h5>
                <p className='Menu-section__list-container__item-container__link'>View menu</p>
                <span className='Menu-section__list-container__item-container__addon'></span>
            </div>
            <div className='Menu-section__list-container__item-container'>
                <img
                    className='Menu-section__list-container__item-container__img'
                    src={require("../../assets/images/fresh_breads.jpg")}
                    alt="Slice of bread followed by grapes and oatmeal"
                />
                <h5 className='Menu-section__list-container__item-container__title'>Fresh breads</h5>
                <p className='Menu-section__list-container__item-container__link'>View menu</p>
                <span className='Menu-section__list-container__item-container__addon'></span>
            </div>
        </div>
    </section>
  )
}

export default Menu