// import "./App.css";
import { Route } from "react-router-dom";
import Categories from "./pages/Categories";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/categories" component={Categories} exact />
    </div>
  );
}

export default App;
