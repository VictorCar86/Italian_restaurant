import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemMenu from '../../components/ItemMenu'
import ArticleInfo from '../../components/ArticleInfo'

const MenuBreakfast = () => {
  return (
    <MenuItemPage
        plateImg={require("../../assets/images/breakfast.jpg")}
        plateImgAlt={"Cooked eggs with avocado and bread"}
        title={"Breakfast"}
        schedule={"10:00 am - 12:00 pm 7 days"}
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
            price={"$20"}
            description={"Organic bacon with your choice of eggs with fresh pumpkin and sourdough"}
        />
        <ItemMenu
            title={"Big breakfast"}
            price={"$35"}
            description={"Bacon, sausages, eggs, fresh tomato and spinach"}
        />
        <ItemMenu
            title={"Poached eggs and avocado"}
            price={"$15"}
            description={"Banana bread with your choice of spread and sausage"}
        />
        <ItemMenu
            title={"Gino"}
            price={"$10"}
            description={"Sauteed spinach&mushrooms with cheddar"}
        />
        <ItemMenu
            title={"Fresh toast"}
            price={"$25"}
            description={"Fresh toast With Bacon Strips"}
        />
    </MenuItemPage>
  )
}

export default MenuBreakfast