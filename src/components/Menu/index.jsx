import React from 'react'
import "./Menu.css"
import PlatesMenu from '../PlatesMenu'
import ArticleInfo from '../ArticleInfo'
import Title from '../Title'

const Menu = () => {
  return (
    <section id='menu' className='Menu-section'>
        <Title title={"Menu"} />
        <p className='description'>Discover the taste</p>
        <div className='Menu-section__list-container'>
            <PlatesMenu
                imgSrc={require("../../assets/images/entrees.jpg")}
                alt={"Table with jam, cheese, strawberries and grapes"}
                title={"Entrees"}
                linkTo={"entrees"}
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
                linkTo={"launch"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/main_courses.jpg")}
                alt={"Roasted meat with zucchini, tomato and fine herbs"}
                title={"Main courses"}
                linkTo={"courses"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/specialty-pastas.jpg")}
                alt={"Fettuccine with meat and cheese"}
                title={"Specialty pastas"}
                linkTo={"pastas"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/pizza.jpg")}
                alt={"Handmade pizza of chicken, cheese and pineapple"}
                title={"Pizza"}
                linkTo={"pizza"}
            />
            <PlatesMenu
                imgSrc={require("../../assets/images/desserts.jpg")}
                alt={"Caramelized slice of bread with blueberries and slices of banana"}
                title={"Desserts"}
                linkTo={"desserts"}
                />
            <PlatesMenu
                imgSrc={require("../../assets/images/fresh_breads.jpg")}
                alt={"Slice of bread followed by grapes and oatmeal"}
                title={"Fresh breads"}
                linkTo={"breads"}
            />
        </div>
        <ArticleInfo
            imgSrc={require("../../assets/images/fallon-travels.jpg")}
            imgAlt={"Restaurant image"}
            description={<>
                    You are always welcome
                    in our restaurant and <br />
                    we are happy to add your
                    requests to our menu
                </>
            }
        />
    </section>
  )
}

export default Menu