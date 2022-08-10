import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import MainPage from "./containers/MainPage";
import MenuItemPage from "./containers/MenuItemPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />}/>
                <Route path="breakfast" element={
                    <MenuItemPage
                        plateImg={require("./assets/images/breakfast.jpg")}
                        plateImgAlt={"Cooked eggs with avocado and bread"}
                    />
                }/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)