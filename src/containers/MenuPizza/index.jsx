import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemMenu from '../../components/ItemMenu'
import ArticleInfo from '../../components/ArticleInfo'


const MenuPizza = () => {
  return (
    <MenuItemPage
        plateImg={require("../../assets/images/pizza.jpg")}
        plateImgAlt={"Handmade pizza of chicken, cheese and pineapple"}
        title={"Pizza"}
        schedule={"12:00 am - 22:00 pm 7 days"}
        article={
        <ArticleInfo
            img={require("../../assets/images/desserts.jpg")}
            altImg={"Toasted bread with grapes and butter"}
            description={<>
                Our menu includes many Italian favorites such as our
                old-world style pizza pies to sweet perfection!
              </>
            }
          />
        }
    >
      {/* Scalable menu with a call from APIs */}
        <ItemMenu
            title={"White Clam Pie"}
            price={"$18.99"}
            description={"Chopped clams, garlic and mozzarella"}
        />
        <ItemMenu
            title={"Parma Pie"}
            price={"$20.50"}
            description={"Hand tossed zesty arugula piled high with shavings of fresh parmigiano, prosciutto and white beans"}
        />
        <ItemMenu
            title={"Veggie Pie"}
            price={"$16.95"}
            description={"Choice of three roasted and selected vegetables"}
        />
        <ItemMenu
            title={"Four Seasons"}
            price={"$19.99"}
            description={"Choice of one classic topping on each ¼ of pie"}
        />
        <ItemMenu
            title={"Garlic Shrimp Pie"}
            price={"$21.50"}
            description={"Shrimp, garlic, light sauce and mozzarella"}
        />
    </MenuItemPage>
  )
}

export default MenuPizza