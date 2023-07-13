import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";

// Component imports
import PizzaList from "../PizzaList/PizzaList";
import Admin from "../Admin/Admin.jsx";

// Import Components
import Checkout from "../Checkout/Checkout";

function App() {
  const dispatch = useDispatch();

  axios
    .get("/api/pizza")
    .then((response) => {
      dispatch({
        type: "SET_PIZZA",
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log("error in get", err);
    });

  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header> */}

        {/* Route for PizzaList component/ home page */}
        <Route exact path='/'>
        <PizzaList />
        </Route>
        {/* <p>Pizza is great.</p> */}

        {/* Route for component 'Checkout' */}
        <Route exact path="/order">
          <Checkout />
        </Route>

        {/* Route for administrative page */}
        <Route path="/admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
