// import "./App.css";
import { Route } from "react-router-dom";
import Categories from "./pages/Categories.js";
import HomePage from "./pages/HomePage.js";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/categories" component={Categories} exact />
    </div>
  );
}

export default App;
