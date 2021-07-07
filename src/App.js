import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Repositories from "./Pages/Repositories";
import About from "./Pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/favorite" component={Repositories}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
