import React from 'react'
import "./Menu.css"
import PlatesMenu from '../PlatesMenu'
import ArticleInfo from '../ArticleInfo'

const Menu = () => {
  return (
    <section className='Menu-section'>
        <h2 className='Menu-section__title title' id="menu">Menu</h2>
        <div className='title__addon'></div>
        <p className='description'>Discover the taste</p>
        <div className='Menu-section__list-container'>
            <PlatesMenu
                imgSrc={require("../../assets/images/entries.jpg")}
                alt={"Table with jam, cheese, strawberries and grapes"}
                title={"Entrees"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/breakfast.jpg")}
                alt={"Cooked eggs with avocado and bread"}
                title={"Breakfast"}
                linkTo={"breakfast"}
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
                alt={"Fettuccine with meat and cheese"}
                title={"Specialty pastas"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/pizza.jpg")}
                alt={"Handmade pizza of chicken, cheese and pineapple"}
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
        <ArticleInfo
            img={require("../../assets/images/fallon-travels.jpg")}
            altImg={"Restaurant image"}
            description={
                `You are always welcome
                in our restaurant and ${<br />}
                we are happy to add your
                requests to our menu`
            }
        />
    </section>
  )
}

export default Menu