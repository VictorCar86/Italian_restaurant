import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemFoodMenu from '../../components/ItemFoodMenu'
import ArticleInfo from '../../components/ArticleInfo'
import dessertsTinyImg from '@food/desserts.jpg'
import dessertsBigImg from '@food/desserts-big.jpg'
import dessertsArtTinyImg from '@articles/article-desserts.jpg'
import dessertsArtBigImg from '@articles/article-desserts-big.jpg'

const MenuDesserts = () => {
  return (
    <MenuItemPage
      imgTinySrc={dessertsTinyImg}
      imgBigSrc={dessertsBigImg}
      imgAlt={"Caramelized slice of bread with blueberries and slices of banana"}
      title={"Desserts"}
      schedule={"10:00 am - 23:00 pm 7 days"}
      article={
        <ArticleInfo
          imgTinySrc={dessertsArtTinyImg}
          imgBigSrc={dessertsArtBigImg}
          imgAlt={"Toasted bread with grapes and butter"}
          description={<>
              There's nothing like the joy that comes from baked goods.
              It can make any occasion feel extra special, from birthdays to anniversaries
              to potlucks and everyday dinners.
            </>
          }
        />
      }
    >
      {/* Scalable menu with a call from APIs */}
        <ItemFoodMenu
            title={"Cherries jubilee"}
            price={"$12.50"}
            description={"Black Cherries sautéed in butter, sugar and a touch of blackberry brandy with vanilla ice cream"}
        />
        <ItemFoodMenu
            title={"Tiramisu"}
            price={"$11.99"}
            description={"A traditional Italian dessert with lady finers soaked in espresso and amaretto and layered with Mascarpone cheese"}
        />
        <ItemFoodMenu
            title={"Torta di formaggio"}
            price={"$10.50"}
            description={"Italian Style Cheesecake, topped with caramel and almonds"}
        />
        <ItemFoodMenu
            title={"Lava di cioccolato"}
            price={"$13.99"}
            description={"The decadent, soft centered, chocolate lava cake served with vanilla ice cream"}
        />
        <ItemFoodMenu
            title={"Cannoli"}
            price={"$10.50"}
            description={"Pastry shell filled with ricotta, chocolate chips, vanilla, sugar, and orange"}
        />
    </MenuItemPage>
  )
}

export default MenuDesserts