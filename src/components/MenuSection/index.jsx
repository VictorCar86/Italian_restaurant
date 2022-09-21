import React from 'react'
import "./MenuSection.css"
import PlatesMenu from '../PlatesMenu'
import ArticleInfo from '../ArticleInfo'
import Title from '../Title'
import entreesTinyImg from '@food/entrees.webp'
import entreesBigImg from '@food/entrees-big.webp'
import breakfastTinyImg from '@food/breakfast.webp'
import breakfastBigImg from '@food/breakfast-big.webp'
import launchSetMenuTinyImg from '@food/lunch_set_menu.webp'
import launchSetMenuBigImg from '@food/lunch_set_menu-big.webp'
import mainCoursesTinyImg from '@food/main_courses.webp'
import mainCoursesBigImg from '@food/main_courses-big.webp'
import specialtyPastaTinyImg from '@food/specialty-pastas.webp'
import specialtyPastaBigImg from '@food/specialty-pastas-big.webp'
import pizzaTinyImg from '@food/pizza.webp'
import pizzaBigImg from '@food/pizza-big.webp'
import dessertsTinyImg from '@food/desserts.webp'
import dessertsBigImg from '@food/desserts-big.webp'
import freshBreadTinyImg from '@food/fresh_breads.webp'
import freshBreadBigImg from '@food/fresh_breads-big.webp'
import restaurantTinyImg from '@addons/fallon-travels.webp'
import restaurantBigImg from '@addons/fallon-travels-big.webp'

const MenuSection = () => {
  return (
    <section id='menu' className='MenuSection'>
        <Title title={"Menu"} />
        <p className='description'>Discover the taste</p>
        <div className='MenuSection__list-container'>
            <PlatesMenu
                imgTinySrc={entreesTinyImg}
                imgBigSrc={entreesBigImg}
                imgAlt={"Table with jam, cheese, strawberries and grapes"}
                title={"Entrees"}
                linkTo={"entrees"}
            />
            <PlatesMenu
                imgTinySrc={breakfastTinyImg}
                imgBigSrc={breakfastBigImg}
                imgAlt={"Cooked eggs with avocado and bread"}
                title={"Breakfast"}
                linkTo={"breakfast"}
            />
            <PlatesMenu
                imgTinySrc={launchSetMenuTinyImg}
                imgBigSrc={launchSetMenuBigImg}
                imgAlt={"Plate with mushrooms, lettuce and bread"}
                title={"Launch set menu"}
                linkTo={"launch"}
            />
            <PlatesMenu
                imgTinySrc={mainCoursesTinyImg}
                imgBigSrc={mainCoursesBigImg}
                imgAlt={"Roasted meat with zucchini, tomato and fine herbs"}
                title={"Main courses"}
                linkTo={"courses"}
            />
            <PlatesMenu
                imgTinySrc={specialtyPastaTinyImg}
                imgBigSrc={specialtyPastaBigImg}
                imgAlt={"Fettuccine with meat and cheese"}
                title={"Specialty pastas"}
                linkTo={"pastas"}
            />
            <PlatesMenu
                imgTinySrc={pizzaTinyImg}
                imgBigSrc={pizzaBigImg}
                imgAlt={"Handmade pizza of chicken, cheese and pineapple"}
                title={"Pizza"}
                linkTo={"pizza"}
            />
            <PlatesMenu
                imgTinySrc={dessertsTinyImg}
                imgBigSrc={dessertsBigImg}
                imgAlt={"Caramelized slice of bread with blueberries and slices of banana"}
                title={"Desserts"}
                linkTo={"desserts"}
                />
            <PlatesMenu
                imgTinySrc={freshBreadTinyImg}
                imgBigSrc={freshBreadBigImg}
                imgAlt={"Slice of bread followed by grapes and oatmeal"}
                title={"Fresh breads"}
                linkTo={"breads"}
            />
        </div>
        <ArticleInfo
            imgTinySrc={restaurantTinyImg}
            imgBigSrc={restaurantBigImg}
            imgAlt={"Restaurant image"}
            description={<>
                You are always welcome
                in our restaurant and <br />
                we are happy to add your
                requests to our menu
            </>}
        />
    </section>
  )
}

export default MenuSection