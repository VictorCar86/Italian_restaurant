import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemMenu from '../../components/ItemMenu'
import ArticleInfo from '../../components/ArticleInfo'


const MenuFreshBread = () => {
  return (
    <MenuItemPage
        plateImg={require("../../assets/images/fresh_breads-big.jpg")}
        plateImgAlt={"Slice of bread followed by grapes and oatmeal"}
        title={"Fresh Bread"}
        schedule={"10:00 am - 18:00 pm 7 days"}
        article={
        <ArticleInfo
            img={require("../../assets/images/article-fresh_bread-big.jpg")}
            altImg={"Toasted bread with grapes and butter"}
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
        <ItemMenu
            title={"Ciabatta"}
            price={"$8.25"}
            description={"Soft white bread made from wheat flour, water, salt, yeast and olive oil"}
        />
        <ItemMenu
            title={"Pane Toscano"}
            price={"$7.50"}
            description={"Slat-free drizzled bread with olive oil and smeared with mashed garlic"}
        />
        <ItemMenu
            title={"Focaccia"}
            price={"$8.75"}
            description={"Flat leavened oven-baked bread brushed or sprinkled with olive oil, coarse salt"}
        />
        <ItemMenu
            title={"Certosino"}
            price={"$9.25"}
            description={"Sweet bread that contains almonds, pine nuts, cocoa powder, dark chocolate, honey, and candied fruit"}
        />
        <ItemMenu
            title={"Buccellato di Lucca"}
            price={"$10.99"}
            description={"Bread prepared in the shape of a ring, its interior is filled with raisins and aniseed, while the exterior with a combination of sugar and eggs"}
        />
    </MenuItemPage>
  )
}

export default MenuFreshBread