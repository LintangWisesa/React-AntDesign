import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Typo from './pages/0_Typography'
import Button from './pages/1_Button'

const App = () => (
  <Router>
    <img alt="antd" width="100px" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
    <img alt="react" width="100px" src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
    <br/><br/><br/>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home | </Link></li>
          <li><Link to="/typo">Typography | </Link></li>
          <li><Link to="/button">Button | </Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <div>
            <h1>React & Ant Design</h1>
            <p>Summary of how to implement Ant Design on React projects</p>
          </div>
        </Route>
        <Route path="/typo"><Typo/></Route>
        <Route path="/button"><Button/></Route>
      </Switch>
    </div>
  </Router>
);

export default App;