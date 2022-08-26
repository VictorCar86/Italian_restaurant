import React from 'react'
import "./Menu.css"
import PlatesMenu from '../PlatesMenu'
import ArticleInfo from '../ArticleInfo'
import Title from '../Title'
import entreesImg from '@food/entrees.jpg'
import breakfastImg from '@food/breakfast.jpg'
import launchSetMenuImg from '@food/lunch_set_menu.jpg'
import mainCoursesImg from '@food/main_courses.jpg'
import specialtyPastaImg from '@food/specialty-pastas.jpg'
import pizzaImg from '@food/pizza.jpg'
import dessertsImg from '@food/desserts.jpg'
import freshBreadImg from '@food/fresh_breads.jpg'
import restaurantImg from '@addons/fallon-travels.jpg'

const Menu = () => {
  return (
    <section id='menu' className='Menu-section'>
        <Title title={"Menu"} />
        <p className='description'>Discover the taste</p>
        <div className='Menu-section__list-container'>
            <PlatesMenu
                imgSrc={entreesImg}
                alt={"Table with jam, cheese, strawberries and grapes"}
                title={"Entrees"}
                linkTo={"entrees"}
            />
            <PlatesMenu
                imgSrc={breakfastImg}
                alt={"Cooked eggs with avocado and bread"}
                title={"Breakfast"}
                linkTo={"breakfast"}
            />
            <PlatesMenu
                imgSrc={launchSetMenuImg}
                alt={"Plate with mushrooms, lettuce and bread"}
                title={"Launch set menu"}
                linkTo={"launch"}
            />
            <PlatesMenu
                imgSrc={mainCoursesImg}
                alt={"Roasted meat with zucchini, tomato and fine herbs"}
                title={"Main courses"}
                linkTo={"courses"}
            />
            <PlatesMenu
                imgSrc={specialtyPastaImg}
                alt={"Fettuccine with meat and cheese"}
                title={"Specialty pastas"}
                linkTo={"pastas"}
            />
            <PlatesMenu
                imgSrc={pizzaImg}
                alt={"Handmade pizza of chicken, cheese and pineapple"}
                title={"Pizza"}
                linkTo={"pizza"}
            />
            <PlatesMenu
                imgSrc={dessertsImg}
                alt={"Caramelized slice of bread with blueberries and slices of banana"}
                title={"Desserts"}
                linkTo={"desserts"}
                />
            <PlatesMenu
                imgSrc={freshBreadImg}
                alt={"Slice of bread followed by grapes and oatmeal"}
                title={"Fresh breads"}
                linkTo={"breads"}
            />
        </div>
        <ArticleInfo
            imgSrc={restaurantImg}
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