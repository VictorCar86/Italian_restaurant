import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemMenu from '../../components/ItemMenu'
import ArticleInfo from '../../components/ArticleInfo'


const MenuMainCourses = () => {
  return (
    <MenuItemPage
        plateImg={require("../../assets/images/main_courses.jpg")}
        plateImgAlt={"Roasted meat with zucchini, tomato and fine herbs"}
        title={"Main Courses"}
        schedule={"12:00 am - 23:00 pm 7 days"}
        article={
        <ArticleInfo
            img={require("../../assets/images/desserts.jpg")}
            altImg={"Toasted bread with grapes and butter"}
            description={<>
                Dishes enjoyed for generations in villages throughout Italy inspire our
                menu, giving La Regina its authentic Italian fare.
              </>
            }
          />
        }
    >
      {/* Scalable menu with a call from APIs */}
        <ItemMenu
            title={"Baked Cavitini"}
            price={"$16.99"}
            description={"Plate of Ziti, mushrooms, onions, green peppers and our homemade tomato sauce and melted mozzarella"}
        />
        <ItemMenu
            title={"Chicken Parmigiana"}
            price={"$21.50"}
            description={"Lightly breaded, tender chicken breast covered in our homestyle tomato sauce and topped with mozzarella cheese"}
        />
        <ItemMenu
            title={"Baked Fish"}
            price={"$18.50"}
            description={"Haddock fish, sautéed in garlic lemon butter"}
        />
        <ItemMenu
            title={"Chicken Cacciatore"}
            price={"$22.99"}
            description={"Cubes of tender chicken in a special mushroom, green pepper and onion sauce"}
        />
        <ItemMenu
            title={"Filetto al Pepe Verde"}
            price={"$39.99"}
            description={"Angus filet mignon finshed in a green peppercorn and brandy cream sauce"}
        />
    </MenuItemPage>
  )
}

export default MenuMainCourses