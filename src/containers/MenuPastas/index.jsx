import React from 'react'
import MenuItemPage from '../../components/MenuItemPage'
import ItemMenu from '../../components/ItemMenu'
import ArticleInfo from '../../components/ArticleInfo'


const MenuPastas = () => {
  return (
    <MenuItemPage
        plateImg={require("../../assets/images/specialty_pastas.jpg")}
        plateImgAlt={"Fettuccine with meat and cheese"}
        title={"Specialty Pastas"}
        schedule={"14:00 am - 20:00 pm 7 days"}
        article={
        <ArticleInfo
            img={require("../../assets/images/desserts.jpg")}
            altImg={"Toasted bread with grapes and butter"}
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
        <ItemMenu
            title={"Fettuccini Alfredo"}
            price={"$15.25"}
            description={"Thick, creamy white garlic and butter sauce with romano cheese"}
        />
        <ItemMenu
            title={"Rotontini di Zucca"}
            price={"$24.00"}
            description={"Jumbo Ravioli filled with butternut squash, sage, and thyme in a Amaretto cream sauce"}
        />
        <ItemMenu
            title={"Ravioli Di Manzo"}
            price={"$26.50"}
            description={"Ravioli Stuffed with braised beef in a mushroom marsala cream sauce"}
        />
        <ItemMenu
            title={"Rigatoni All\’ Amatriciana"}
            price={"$23.50"}
            description={"Rigatoni pasta sautéed with cured pork cheek, onion, pecorino cheese and pomodorini sauce"}
        />
        <ItemMenu
            title={"Pasta Broccoli"}
            price={"$14.99"}
            description={"Served with Ziti in a garlic and Butter Sauce, topped with Fresh-Grated Romano Cheese"}
        />
    </MenuItemPage>
  )
}

export default MenuPastas