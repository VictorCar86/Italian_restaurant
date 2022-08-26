import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemFoodMenu from '../../components/ItemFoodMenu'
import ArticleInfo from '../../components/ArticleInfo'
import pizzaBigImg from '@food/pizza-big.jpg'
import pizzaArtBigImg from '@articles/article-pizza-big.jpg'

const MenuPizza = () => {
  return (
    <MenuItemPage
        plateImg={pizzaBigImg}
        plateImgAlt={"Handmade pizza of chicken, cheese and pineapple"}
        title={"Pizza"}
        schedule={"12:00 am - 22:00 pm 7 days"}
        article={
        <ArticleInfo
            imgSrc={pizzaArtBigImg}
            imgAlt={"Toasted bread with grapes and butter"}
            description={<>
                Our menu includes many Italian favorites such as our
                old-world style pizza pies to sweet perfection!
              </>
            }
          />
        }
    >
      {/* Scalable menu with a call from APIs */}
        <ItemFoodMenu
            title={"White Clam Pie"}
            price={"$18.99"}
            description={"Chopped clams, garlic and mozzarella"}
        />
        <ItemFoodMenu
            title={"Parma Pie"}
            price={"$20.50"}
            description={"Hand tossed zesty arugula piled high with shavings of fresh parmigiano, prosciutto and white beans"}
        />
        <ItemFoodMenu
            title={"Veggie Pie"}
            price={"$16.95"}
            description={"Choice of three roasted and selected vegetables"}
        />
        <ItemFoodMenu
            title={"Four Seasons"}
            price={"$19.99"}
            description={"Choice of one classic topping on each ¼ of pie"}
        />
        <ItemFoodMenu
            title={"Garlic Shrimp Pie"}
            price={"$21.50"}
            description={"Shrimp, garlic, light sauce and mozzarella"}
        />
    </MenuItemPage>
  )
}

export default MenuPizza