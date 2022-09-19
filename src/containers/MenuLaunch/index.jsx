import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemFoodMenu from '../../components/ItemFoodMenu'
import ArticleInfo from '../../components/ArticleInfo'
import launchSetMenuTinyImg from '@food/lunch_set_menu.jpg'
import launchSetMenuBigImg from '@food/lunch_set_menu-big.jpg'
import launchSetMenuArtTinyImg from '@articles/article-lunch-set-menu.jpg'
import launchSetMenuArtBigImg from '@articles/article-lunch-set-menu-big.jpg'

const MenuLaunch = () => {
  return (
    <MenuItemPage
      imgTinySrc={launchSetMenuTinyImg}
      imgBigSrc={launchSetMenuBigImg}
      imgAlt={"Plate with mushrooms, lettuce and bread"}
      title={"Launch Set Menu"}
      schedule={"10:00 am - 23:00 pm 7 days"}
      article={
        <ArticleInfo
          imgTinySrc={launchSetMenuArtTinyImg}
          imgBigSrc={launchSetMenuArtBigImg}
          imgAlt={"Toasted bread with grapes and butter"}
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
        <ItemFoodMenu
            title={"Italian Turkey Club"}
            price={"$12.50"}
            description={"Fresh roasted turkey and bacon with lettuce, tomato, and mayonnaise on toasted multi grain bread"}
        />
        <ItemFoodMenu
            title={"Insalata Alla Greca"}
            price={"$13.50"}
            description={"Traditional Greek salad with feta cheese, kalamata olives, tomatoes, onions and cucumbers"}
        />
        <ItemFoodMenu
            title={"Blackened Shrimp"}
            price={"$16.50"}
            description={"Fresh baby greens with onions, tomatoes, carrots, toasted almonds, gorgonzola cheese and blackened shrimp"}
        />
        <ItemFoodMenu
            title={"Insalata con Tonno"}
            price={"$14.50"}
            description={"Fresh spring mix topped with sesame crusted ahi tuna and sesame ginger dressing"}
        />
        <ItemFoodMenu
            title={"Soup and House Salad"}
            price={"$13.50"}
            description={"Tomatoes, onions, cucumbers, and carrots with white zinfandel dressing and croutons"}
        />
    </MenuItemPage>
  )
}

export default MenuLaunch