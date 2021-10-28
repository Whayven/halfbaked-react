import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./routes";

import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <h1>Half Baked Kitchen</h1>
      <Navigation />
      {routes}
    </div>
  );
}

export default App;
