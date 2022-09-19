import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemFoodMenu from '../../components/ItemFoodMenu'
import ArticleInfo from '../../components/ArticleInfo'
import mainCoursesTinyImg from '@food/main_courses.jpg'
import mainCoursesBigImg from '@food/main_courses-big.jpg'
import mainCoursesArtTinyImg from '@articles/article-main_courses.jpg'
import mainCoursesArtBigImg from '@articles/article-main_courses-big.jpg'

const MenuMainCourses = () => {
  return (
    <MenuItemPage
      imgTinySrc={mainCoursesTinyImg}
      imgBigSrc={mainCoursesBigImg}
      imgAlt={"Roasted meat with zucchini, tomato and fine herbs"}
      title={"Main Courses"}
      schedule={"12:00 am - 23:00 pm 7 days"}
      article={
        <ArticleInfo
          imgTinySrc={mainCoursesArtTinyImg}
          imgBigSrc={mainCoursesArtBigImg}
          imgAlt={"Toasted bread with grapes and butter"}
          description={<>
              Dishes enjoyed for generations in villages throughout Italy inspire our
              menu, giving La Regina its authentic Italian fare.
            </>
          }
        />
      }
    >
      {/* Scalable menu with a call from APIs */}
        <ItemFoodMenu
            title={"Baked Cavitini"}
            price={"$16.99"}
            description={"Plate of Ziti, mushrooms, onions, green peppers and our homemade tomato sauce and melted mozzarella"}
        />
        <ItemFoodMenu
            title={"Chicken Parmigiana"}
            price={"$21.50"}
            description={"Lightly breaded, tender chicken breast covered in our homestyle tomato sauce and topped with mozzarella cheese"}
        />
        <ItemFoodMenu
            title={"Baked Fish"}
            price={"$18.50"}
            description={"Haddock fish, sautéed in garlic lemon butter"}
        />
        <ItemFoodMenu
            title={"Chicken Cacciatore"}
            price={"$22.99"}
            description={"Cubes of tender chicken in a special mushroom, green pepper and onion sauce"}
        />
        <ItemFoodMenu
            title={"Filetto al Pepe Verde"}
            price={"$39.99"}
            description={"Angus filet mignon finshed in a green peppercorn and brandy cream sauce"}
        />
    </MenuItemPage>
  )
}

export default MenuMainCourses