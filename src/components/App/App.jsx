import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import PizzaList from '../PizzaList/PizzaList';
import './App.css';



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
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <PizzaList />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
