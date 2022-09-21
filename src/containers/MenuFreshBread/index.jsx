import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemFoodMenu from '../../components/ItemFoodMenu'
import ArticleInfo from '../../components/ArticleInfo'
import freshBreadTinyImg from '@food/fresh_breads.webp'
import freshBreadBigImg from '@food/fresh_breads-big.webp'
import freshBreadArtTinyImg from '@articles/article-fresh_breads.webp'
import freshBreadArtBigImg from '@articles/article-fresh_breads-big.webp'

const MenuFreshBread = () => {
  return (
    <MenuItemPage
        imgTinySrc={freshBreadTinyImg}
        imgBigSrc={freshBreadBigImg}
        imgAlt={"Slice of bread followed by grapes and oatmeal"}
        title={"Fresh Bread"}
        schedule={"10:00 am - 18:00 pm 7 days"}
        article={
          <ArticleInfo
            imgTinySrc={freshBreadArtTinyImg}
            imgBigSrc={freshBreadArtBigImg}
            imgAlt={"Toasted bread with grapes and butter"}
            description={<>
                Italy has an incredible variety of breads,
                with many regional versions of flatbread,
                sourdough and your traditional loaf. <br />
                It's definitely worth trying some of the
                specialist breads that are available
              </>
            }
          />
        }
    >
      {/* Scalable menu with a call from APIs */}
        <ItemFoodMenu
            title={"Ciabatta"}
            price={"$8.25"}
            description={"Soft white bread made from wheat flour, water, salt, yeast and olive oil"}
        />
        <ItemFoodMenu
            title={"Pane Toscano"}
            price={"$7.50"}
            description={"Slat-free drizzled bread with olive oil and smeared with mashed garlic"}
        />
        <ItemFoodMenu
            title={"Focaccia"}
            price={"$8.75"}
            description={"Flat leavened oven-baked bread brushed or sprinkled with olive oil, coarse salt"}
        />
        <ItemFoodMenu
            title={"Certosino"}
            price={"$9.25"}
            description={"Sweet bread that contains almonds, pine nuts, cocoa powder, dark chocolate, honey, and candied fruit"}
        />
        <ItemFoodMenu
            title={"Buccellato di Lucca"}
            price={"$10.99"}
            description={"Bread prepared in the shape of a ring, its interior is filled with raisins and aniseed, while the exterior with a combination of sugar and eggs"}
        />
    </MenuItemPage>
  )
}

export default MenuFreshBread