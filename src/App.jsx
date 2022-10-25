import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
import PlantCare from "./pages/PlantCare";
import Blog from "./pages/Blog";
import ShoppingCart from "./pages/Shopping.cart";
import User from "./pages/User";
// import PlantsCatalog from "./pages/Plants.catalog";
import Plants from "./pages/Plants";
// import PlantsCatalog from "./pages/Plants.catalog";
// import PlantPage from "./pages/PlantPage";
// import PlantPage from "./pages/PlantPage";

function App() {
  document.body.className =
    " bg-[#f5f5f5] text-[#1c1c1c] dark:bg-neutral-600 dark:text-[#f5f5f5] ";
  return (
    <div className=" relative">
      <Header />
      <Switch>
        
        {/* <Route path="/catalog/" component={PlantPage} /> */}
        <Route path="/accessories" component={Accessories} />
        <Route path="/plantcare" component={PlantCare} />
        <Route path="/blog" component={Blog} />
        <Route path="/bag" component={ShoppingCart} />
        <Route path="/user" component={User} />
        <Route path="/catalog/:plantId?" component={Plants} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
