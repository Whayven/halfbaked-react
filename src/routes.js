import React from "react";
import { Switch, Route } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp";
import PotencyCalculator from "./components/PotencyCalculator/PotencyCalculator";
import Merchandise from "./components/Merchandise/Merchandise";
import Cart from "./components/Cart/Cart";

export default (
    <Switch>
        <Route exact path="/" component={PotencyCalculator} />
        <Route path="/cart" component={Cart} />
        <Route path="/shop" component={Merchandise} />
        <Route path="/signup" component={SignUp} />
    </Switch>
);