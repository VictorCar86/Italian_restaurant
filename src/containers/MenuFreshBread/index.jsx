import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemMenu from '../../components/ItemMenu'
import ArticleInfo from '../../components/ArticleInfo'


const MenuFreshBread = () => {
  return (
    <MenuItemPage
        plateImg={require("../../assets/images/fresh_breads.jpg")}
        plateImgAlt={"Slice of bread followed by grapes and oatmeal"}
        title={"Fresh Bread"}
        schedule={"10:00 am - 18:00 pm 7 days"}
        article={
        <ArticleInfo
            img={require("../../assets/images/desserts.jpg")}
            altImg={"Toasted bread with grapes and butter"}
            description={<>
                Breakfast is everything.
                the beginning. the first
                thing. it is the mouthful
                that is the commitment
                to a new day. <br />
                A continuing life
              </>
            }
          />
        }
    >
        <ItemMenu
            title={"Bacon and eggs"}
            price={"$99"}
            description={"Organic bacon with your choice of eggs with fresh pumpkin and sourdough"}
        />
        <ItemMenu
            title={"Big breakfast"}
            price={"$99"}
            description={"Bacon, sausages, eggs, fresh tomato and spinach"}
        />
        <ItemMenu
            title={"Poached eggs and avocado"}
            price={"$99"}
            description={"Banana bread with your choice of spread and sausage"}
        />
        <ItemMenu
            title={"Gino"}
            price={"$99"}
            description={"Sauteed spinach&mushrooms with cheddar"}
        />
        <ItemMenu
            title={"Fresh toast"}
            price={"$99"}
            description={"Fresh toast With Bacon Strips"}
        />
    </MenuItemPage>
  )
}

export default MenuFreshBread