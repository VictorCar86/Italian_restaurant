import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import ScrollToTop from "./hooks/ScrollToTop";
import MainPage from "./containers/MainPage";
import MenuBreakfast from "./containers/MenuBreakfast";
import MenuEntrees from "./containers/MenuEntrees";
import MenuLaunch from "./containers/MenuLaunch";
import MenuMainCourses from "./containers/MenuMainCourses";
import MenuPastas from "./containers/MenuPastas";
import MenuPizza from "./containers/MenuPizza";
import MenuDesserts from "./containers/MenuDesserts";
import MenuFreshBread from "./containers/MenuFreshBread";
import WineCocktailPage from "./components/WineCocktailPage";
import ItalyWineCocktail from "./containers/ItalyWineCocktail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route index element={<MainPage />}/>
                <Route path="breakfast" element={<MenuBreakfast />}/>
                <Route path="entrees" element={<MenuEntrees />}/>
                <Route path="launch" element={<MenuLaunch />}/>
                <Route path="courses" element={<MenuMainCourses />}/>
                <Route path="pastas" element={<MenuPastas />}/>
                <Route path="pizza" element={<MenuPizza />}/>
                <Route path="desserts" element={<MenuDesserts />}/>
                <Route path="breads" element={<MenuFreshBread />}/>
                <Route path="wine-cocktail" element={<WineCocktailPage />}/>
                <Route path="wine-cocktail/italy" element={<ItalyWineCocktail />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)