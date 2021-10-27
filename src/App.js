import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import PotencyCalculator from "./components/PotencyCalculator/PotencyCalculator";
import Merchandise from "./components/Merchandise/Merchandise";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <header className="my-4">
        <h1>Half Baked Kitchen</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/cart" component={Cart}>
              Cart
            </Route>
            <Route exact path="/shop" component={Merchandise}>
              Shop
            </Route>
            <Route exact path="/signup" component={SignUp}>
              SignUp
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
      <PotencyCalculator></PotencyCalculator>
    </div>
  );
}

export default App;
