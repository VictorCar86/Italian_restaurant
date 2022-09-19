import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemFoodMenu from '../../components/ItemFoodMenu'
import ArticleInfo from '../../components/ArticleInfo'
import entreesTinyImg from '@food/entrees.jpg'
import entreesBigImg from '@food/entrees-big.jpg'
import entreesArtTinyImg from '@articles/article-entrees.jpg'
import entreesArtBigImg from '@articles/article-entrees-big.jpg'

const MenuEntrees = () => {
  return (
    <MenuItemPage
        imgTinySrc={entreesTinyImg}
        imgBigSrc={entreesBigImg}
        imgAlt={"Table with jam, cheese, strawberries and grapes"}
        title={"Entrees"}
        schedule={"12:00 am - 23:00 pm 7 days"}
        article={
        <ArticleInfo
            imgTinySrc={entreesArtTinyImg}
            imgBigSrc={entreesArtBigImg}
            imgAlt={"Little fried prawns with chives"}
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
        <ItemFoodMenu
            title={"Fried Mozzarella Sticks"}
            price={"$8.95"}
            description={"Served with our homestyle tomato sauce for dipping"}
        />
        <ItemFoodMenu
            title={"Pasta Fazola"}
            price={"$7.99"}
            description={"Tomato/Butter sauce with butter beans"}
        />
        <ItemFoodMenu
            title={"Delicious Homemade Soups"}
            price={"$4.50"}
            description={"Select from: Tortellini, Minestrone or Cream Of Broccoli"}
        />
        <ItemFoodMenu
            title={"Fried Ravioli with Jalapeno"}
            price={"$8.95"}
            description={"Pleasing deep fried pasta pockets filled with cheese and served with our homestyle tomato sauce"}
        />
        <ItemFoodMenu
            title={"Antipasto Misto Italiano"}
            price={"$8.50"}
            description={"Thin slices of cured meats and an Italian cheese selection"}
        />
    </MenuItemPage>
  )
}

export default MenuEntrees