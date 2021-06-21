import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './resources/index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components (pages)
import Home from './components/home';
import About from './components/about';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route> {/* HOME */}
        <Route exact path="/about"><About/></Route> {/* HOME */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
