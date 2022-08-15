import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemMenu from '../../components/ItemMenu'
import ArticleInfo from '../../components/ArticleInfo'


const MenuEntrees = () => {
  return (
    <MenuItemPage
        plateImg={require("../../assets/images/entrees-big.jpg")}
        plateImgAlt={"Table with jam, cheese, strawberries and grapes"}
        title={"Entrees"}
        schedule={"12:00 am - 23:00 pm 7 days"}
        article={
        <ArticleInfo
            img={require("../../assets/images/article-entree-big.jpg")}
            altImg={"Little fried prawns with chives"}
            description={<>
                Whet your appetite with these yummy
                entrees that will get your tummies
                uber excited for the main course and dessert.
              </>
            }
          />
        }
    >
      {/* Scalable menu with a call from APIs */}
        <ItemMenu
            title={"Fried Mozzarella Sticks"}
            price={"$8.95"}
            description={"Served with our homestyle tomato sauce for dipping"}
        />
        <ItemMenu
            title={"Pasta Fazola"}
            price={"$7.99"}
            description={"Tomato/Butter sauce with butter beans"}
        />
        <ItemMenu
            title={"Delicious Homemade Soups"}
            price={"$4.50"}
            description={"Select from: Tortellini, Minestrone or Cream Of Broccoli"}
        />
        <ItemMenu
            title={"Fried Ravioli with Jalapeno"}
            price={"$8.95"}
            description={"Pleasing deep fried pasta pockets filled with cheese and served with our homestyle tomato sauce"}
        />
        <ItemMenu
            title={"Antipasto Misto Italiano"}
            price={"$8.50"}
            description={"Thin slices of cured meats and an Italian cheese selection"}
        />
    </MenuItemPage>
  )
}

export default MenuEntrees