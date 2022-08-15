import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemMenu from '../../components/ItemMenu'
import ArticleInfo from '../../components/ArticleInfo'


const MenuLaunch = () => {
  return (
    <MenuItemPage
        plateImg={require("../../assets/images/lunch_set_menu.jpg")}
        plateImgAlt={"Plate with mushrooms, lettuce and bread"}
        title={"Launch Set Menu"}
        schedule={"10:00 am - 23:00 pm 7 days"}
        article={
        <ArticleInfo
            img={require("../../assets/images/desserts.jpg")}
            altImg={"Toasted bread with grapes and butter"}
            description={<>
                From easy Italian soup recipes to swift yet
                filling meals. These Italian lunch recipes are
                quick to make for you and pretty delicious to eat.
              </>
            }
          />
        }
    >
      {/* Scalable menu with a call from APIs */}
        <ItemMenu
            title={"Italian Turkey Club"}
            price={"$12.50"}
            description={"Fresh roasted turkey and bacon with lettuce, tomato, and mayonnaise on toasted multi grain bread"}
        />
        <ItemMenu
            title={"Insalata Alla Greca"}
            price={"$13.50"}
            description={"Traditional Greek salad with feta cheese, kalamata olives, tomatoes, onions and cucumbers"}
        />
        <ItemMenu
            title={"Blackened Shrimp"}
            price={"$16.50"}
            description={"Fresh baby greens with onions, tomatoes, carrots, toasted almonds, gorgonzola cheese and blackened shrimp"}
        />
        <ItemMenu
            title={"Insalata con Tonno"}
            price={"$14.50"}
            description={"Fresh spring mix topped with sesame crusted ahi tuna and sesame ginger dressing"}
        />
        <ItemMenu
            title={"Soup and House Salad"}
            price={"$13.50"}
            description={"Tomatoes, onions, cucumbers, and carrots with white zinfandel dressing and croutons"}
        />
    </MenuItemPage>
  )
}

export default MenuLaunch