// import * as React from "react";
import GeoSearch from "./mapBoxGeocode";
import "mapbox-gl/dist/mapbox-gl.css";
import MenuApp from "./components/menuApp";
import Header from "./components/header.js";
import Contact from "./components/contact.js";
import ContentHome from "./components/content-home.js";
import { Needies } from "./components/needies.js";
import { Needy } from "./components/needy";
import Footer from "./components/footer";
import About from "./components/about.js";
import { Register } from "./components/register.js";
import { AllNeedies } from "./components/allNeedies.js";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <MenuApp />
                <div className="container">
                    <Route exact path="/">
                        <Header />
                        <ContentHome />
                    </Route>
                    <Route path="/needies">
                        <Header />
                        <Needies />
                    </Route>
                    <Route path="/needy">
                        <Needy />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/allneedies">
                        <AllNeedies />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </div>
            </BrowserRouter>
            <Footer />
        </>
    );
}
