import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './resources/index.scss';
import './resources/_mobile.scss';

// Components (pages)
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Transition from './components/transition';

// Redux store for transition
import transition from './reduxstore/transition'
const store = transition();

// Declare global variable
declare global {
  interface Window {
    startT: () => void;
    inTransition: boolean;
    url: string;
    mobileMenu: boolean;
  }
}
window.startT = () => {};
window.url = '#';
window.inTransition = false;
window.mobileMenu = false;

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={ process.env.PUBLIC_URL }>
      <Router>
        <Provider store={ store }>
          <Transition/>
          <Switch>
            <Route exact path="/"><Home/></Route> {/* HOME */}
            <Route exact path="/about"><About/></Route> {/* ABOUT */}
            <Route exact path="/projects"><Projects/></Route> {/* PROJECTS */}
            <Route exact path="/contact"><Contact/></Route> {/* PROJECTS */}
          </Switch>
        </Provider>
      </Router>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
