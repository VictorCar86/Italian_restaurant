import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";
import MainPage from "../containers/MainPage";
import MenuBreakfast from "../containers/MenuBreakfast";
import MenuEntrees from "../containers/MenuEntrees";
import MenuLaunch from "../containers/MenuLaunch";
import MenuMainCourses from "../containers/MenuMainCourses";
import MenuPastas from "../containers/MenuPastas";
import MenuPizza from "../containers/MenuPizza";
import MenuDesserts from "../containers/MenuDesserts";
import MenuFreshBread from "../containers/MenuFreshBread";
import WineCocktailPage from "../containers/WineCocktailPage";
import ItalyWineCocktailPage from '../containers/ItalyWineCocktailPage';
import SpainWineCocktailPage from '../containers/SpainWineCocktailPage';
import FranceWineCocktailPage from '../containers/FranceWineCocktailPage';
import PortugalWineCocktailPage from '../containers/PortugalWineCocktailPage';
import ChileWineCocktailPage from '../containers/ChileWineCocktailPage';
import TasteGalleryPage from '../containers/TasteGalleryPage';
import ReservationFirstPage from '../containers/ReservationFirstPage';
import ReservationDataPage from '../containers/ReservationDataPage';
import ReservationFormPage from '../containers/ReservationFormPage';
import AppProvider from '../context/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route index element={<MainPage />}/>
            <Route path="taste-gallery"          element={<TasteGalleryPage />}/>
            <Route path="breakfast"              element={<MenuBreakfast />}/>
            <Route path="entrees"                element={<MenuEntrees />}/>
            <Route path="launch"                 element={<MenuLaunch />}/>
            <Route path="courses"                element={<MenuMainCourses />}/>
            <Route path="pastas"                 element={<MenuPastas />}/>
            <Route path="pizza"                  element={<MenuPizza />}/>
            <Route path="desserts"               element={<MenuDesserts />}/>
            <Route path="breads"                 element={<MenuFreshBread />}/>

            <Route path="wine-cocktail"          element={<WineCocktailPage />}/>
            <Route path="wine-cocktail/italy"    element={<ItalyWineCocktailPage />}/>
            <Route path="wine-cocktail/spain"    element={<SpainWineCocktailPage />}/>
            <Route path="wine-cocktail/france"   element={<FranceWineCocktailPage />}/>
            <Route path="wine-cocktail/portugal" element={<PortugalWineCocktailPage />}/>
            <Route path="wine-cocktail/chile"    element={<ChileWineCocktailPage />}/>

            <Route path="reservation"            element={<ReservationFirstPage />}/>
            <Route path="reservation/data"       element={<ReservationDataPage />}/>
            <Route path="reservation/data/form"  element={<ReservationFormPage />}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App