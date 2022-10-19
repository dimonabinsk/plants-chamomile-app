import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Accessories from "./pages/Accessories";
import PlantCare from "./pages/PlantCare";
import Blog from "./pages/Blog";
import ShoppingCart from "./pages/Shopping.cart";
import User from "./pages/User";

function App() {
  document.body.className =
    "bg-white dark:bg-neutral-600 dark:text-neutral-100 ";
  return (
    <>
      <Header />
      <Switch>
        <Route path="/catalog" component={Catalog} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/plantcare" component={PlantCare} />
        <Route path="/blog" component={Blog} />
        <Route path="/bag" component={ShoppingCart} />
        <Route path="/user" component={User} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
