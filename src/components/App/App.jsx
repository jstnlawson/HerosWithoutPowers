import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList';
import './App.css';
import Admin from "../Admin/Admin.jsx";
import Checkout from "../Checkout/Checkout";
import PizzaForm from '../PizzaForm/PizzaForm'
import Bar from '../Toolbar/Bar'
function App() {

  const dispatch = useDispatch()




axios.get('/api/pizza').then(response => {
  dispatch({
    type:'SET_PIZZA',
    payload:response.data
  })
}).catch(err => {
  console.log("error in get", err)
})

  return (
     <Router>
      <Bar/>
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

        <Route path="/pizzaform">
          <PizzaForm />
        </Route>
      </div>
      
    </Router>
  );
}

export default App;
