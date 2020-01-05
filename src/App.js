import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
      <Link to="/">Back to home</Link>
      <br></br>
      <a href="/">Back to home normal</a>
      <br></br>
      <button onClick={() => props.history.push('/')}>Home button</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
