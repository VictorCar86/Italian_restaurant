import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemFoodMenu from '../../components/ItemFoodMenu'
import ArticleInfo from '../../components/ArticleInfo'
import breakfastBigImg from '@food/breakfast-big.jpg'
import frenchToastArtBigImg from '@articles/article-french-toast-big.jpg'

const MenuBreakfast = () => {
  return (
    <MenuItemPage
        plateImg={breakfastBigImg}
        plateImgAlt={"Cooked eggs with avocado and bread"}
        title={"Breakfast"}
        schedule={"10:00 am - 12:00 pm 7 days"}
        article={
        <ArticleInfo
            imgSrc={frenchToastArtBigImg}
            imgAlt={"Toasted bread with grapes and butter"}
            description={<>
                Breakfast is everything.
                the beginning. the first
                thing. it is the mouthful
                that is the commitment
                to a new day, <br />
                a continuing life
              </>
            }
          />
        }
    >
      {/* Scalable menu with a call from APIs */}
        <ItemFoodMenu
            title={"Bacon and eggs"}
            price={"$19.99"}
            description={"Organic bacon with your choice of eggs with fresh pumpkin and sourdough"}
        />
        <ItemFoodMenu
            title={"Big breakfast"}
            price={"$35.99"}
            description={"Bacon, sausages, eggs, fresh tomato and spinach"}
        />
        <ItemFoodMenu
            title={"Poached eggs and avocado"}
            price={"$14.99"}
            description={"Banana bread with your choice of spread and sausage"}
        />
        <ItemFoodMenu
            title={"Gino"}
            price={"$10.50"}
            description={"Sauteed spinach&mushrooms with cheddar"}
        />
        <ItemFoodMenu
            title={"Fresh toast"}
            price={"$24.50"}
            description={"Fresh toast With Bacon Strips"}
        />
    </MenuItemPage>
  )
}

export default MenuBreakfast