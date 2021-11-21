import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './eggplant_logo.png';
import Navbar from './layout/Navbar';
import FoodsContainer  from './containers/FoodsContainer';
import ImpactContainer  from './containers/ImpactContainer';
import FoodInput from './components/foods/FoodInput';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      
    
      <Router>
        <div>
        <Navbar />
        </div>
        <div className="main">
        <Routes>
        <Route path="/foods" element={<FoodsContainer />} />
        <Route path="/food_new" element={<FoodInput />} />
        <Route path="/stats" element={<ImpactContainer />} />
        </Routes>
        </div>
      </Router>
      </div>
  );
}


/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>*/

export default App;
