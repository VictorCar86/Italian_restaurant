import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemFoodMenu from '../../components/ItemFoodMenu'
import ArticleInfo from '../../components/ArticleInfo'


const MenuPastas = () => {
  return (
    <MenuItemPage
        plateImg={require("../../assets/images/specialty-pastas-big.jpg")}
        plateImgAlt={"Fettuccine with meat and cheese"}
        title={"Specialty Pastas"}
        schedule={"14:00 am - 20:00 pm 7 days"}
        article={
        <ArticleInfo
            imgSrc={require("../../assets/images/article-specialty-pastas-big.jpg")}
            imgAlt={"Toasted bread with grapes and butter"}
            description={<>
                Pasta satisfies our every craving, whether that be for classic or innovative flavors;
                can be jazzed up for a multi-step meal or made all in one pot;
                and goes great with all the best seasonal flavors
              </>
            }
          />
        }
    >
      {/* Scalable menu with a call from APIs */}
        <ItemFoodMenu
            title={"Fettuccini Alfredo"}
            price={"$15.25"}
            description={"Thick, creamy white garlic and butter sauce with romano cheese"}
        />
        <ItemFoodMenu
            title={"Rotontini di Zucca"}
            price={"$24.00"}
            description={"Jumbo Ravioli filled with butternut squash, sage, and thyme in a Amaretto cream sauce"}
        />
        <ItemFoodMenu
            title={"Ravioli Di Manzo"}
            price={"$26.50"}
            description={"Ravioli Stuffed with braised beef in a mushroom marsala cream sauce"}
        />
        <ItemFoodMenu
            title={"Rigatoni All\’ Amatriciana"}
            price={"$23.50"}
            description={"Rigatoni pasta sautéed with cured pork cheek, onion, pecorino cheese and pomodorini sauce"}
        />
        <ItemFoodMenu
            title={"Pasta Broccoli"}
            price={"$14.99"}
            description={"Served with Ziti in a garlic and Butter Sauce, topped with Fresh-Grated Romano Cheese"}
        />
    </MenuItemPage>
  )
}

export default MenuPastas